<?php

namespace App\Exception;

use App\Entity\User;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

/**
 * Exception renvoyée lorsque les tentatives de connexion sont trop nombreuses
 */
class TooManyAttemptException extends AuthenticationException 
{
    /** @var User */
    private $user;
    
    public function __construct(User $user)
    {
        $this->user = $user;
        parent::__construct('', 0, null);
    }

    public function getMessageKey(): string
    {
        return 'Trop de tentatives échouées. Réessayer de vous connectez dans 5 minutes';
    }

    public function getUser(): User
    {
        return $this->user;
    }
}
