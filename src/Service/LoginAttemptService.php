<?php

namespace App\Service;

use App\Entity\LoginAttempt;
use App\Entity\User;
use App\Repository\LoginAttemptRepository;
use Doctrine\ORM\EntityManagerInterface;

class LoginAttemptService
{
    const ATTEMPTS = 3;
    
    private $repository;
    private $manager;

    public function __construct(LoginAttemptRepository $repository, EntityManagerInterface $manager)
    {
        $this->repository = $repository;
        $this->manager = $manager;
    }

    public function addAttempt(User $user): void
    {
        $attempt = (new LoginAttempt())->setUser($user);
        $this->manager->persist($attempt);
        $this->manager->flush();
    }

    public function limitAttemptFor(User $user): bool
    {
        return $this->repository->countRecentFor($user, 5) >= self::ATTEMPTS;
    }

}
