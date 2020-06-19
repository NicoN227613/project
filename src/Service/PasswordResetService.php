<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\PasswordResetData;
use App\Entity\PasswordResetToken;
use App\Repository\UserRepository;
use App\Event\PasswordResetRequestEvent;
use App\Event\PasswordUpdatedEvent;
use App\Exception\UserNotFoundException;
use Doctrine\ORM\EntityManagerInterface;
use App\Exception\CurrentPasswordResetException;
use App\Repository\PasswordResetTokenRepository;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class PasswordResetService
{
    const EXPIRE_IN = 5; // Temps d'expiration d'un token

    private $userRepository;
    private $tokenRepository;
    private $manager;
    private $generator;
    private $dispatcher;

    public function __construct(
        UserRepository $userRepository,
        PasswordResetTokenRepository $tokenRepository,
        EntityManagerInterface $manager,
        TokenGeneratorService $generator,
        EventDispatcherInterface $dispatcher,
        UserPasswordEncoderInterface $encoder
    ) {
        $this->userRepository = $userRepository;
        $this->tokenRepository = $tokenRepository;
        $this->manager = $manager;
        $this->generator = $generator;
        $this->dispatcher = $dispatcher;
        $this->encoder = $encoder;
    }

    /**
     * Lance une demande de réinitialisation de mot de passe
     * @throws CurrentPasswordResetException
     * @throws UserNotFoundException
     */
    public function resetPassword(PasswordResetData $data): void
    {
        $user = $this->userRepository->findOneBy(['email' => $data->getEmail()]);
        if ($user === null) {
            throw new UserNotFoundException();
        }
        $token = $this->tokenRepository->findOneBy(['user' => $user]);
        $expirationDate = new \DateTime('-'. self::EXPIRE_IN . ' minutes');
        if ($token !== null && !$this->isExpired($token)) {
            throw new CurrentPasswordResetException();
        }
        if ($token === null) {
            $token = (new PasswordResetToken());
            $this->manager->persist($token);
        }
        $token->setUser($user)
            ->setCreatedAt(new \DateTime())
            ->setToken($this->generator->generateToken());
        $this->manager->flush();
        $this->dispatcher->dispatch(new PasswordResetRequestEvent($token));
    }

    public function isExpired(PasswordResetToken $token): bool
    {
        $expirationDate = new \DateTime('-' . self::EXPIRE_IN . ' minutes');
        return $token->getCreatedAt() < $expirationDate;
    }

    public function updatePassword(string $password, User $user): void 
    {
        $user->setPassword($this->encoder->encodePassword($user, $password));
        $this->manager->flush();
        $this->dispatcher->dispatch(new PasswordUpdatedEvent($user));
    }
}
