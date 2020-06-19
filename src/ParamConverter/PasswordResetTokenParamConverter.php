<?php

namespace App\ParamConverter;

use App\Entity\PasswordResetToken;
use App\Repository\PasswordResetTokenRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterInterface;
use Symfony\Component\HttpFoundation\Request;

class PasswordResetTokenParamConverter implements ParamConverterInterface
{
    private $manager;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    public function apply(Request $request, ParamConverter $configuration): bool
    {
        $token = $this->manager->getRepository(PasswordResetToken::class)->findOneBy([
            'token' => $request->get('token')
        ]);
        $request->attributes->set('token', $token);
        return true;
    }

    public function supports(\Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter $configuration)
    {
        return $configuration->getClass() === PasswordResetToken::class && $configuration->getName() === 'token';
    }
}