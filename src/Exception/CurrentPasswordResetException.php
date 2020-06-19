<?php

namespace App\Exception;

use Symfony\Component\Security\Core\Exception\AuthenticationException;
/**
 * Exception renvoyée si une demande de mot de passe est faite alors qu'une demande est déjà en cours
 */
class CurrentPasswordResetException extends AuthenticationException 
{
    public function __construct()
    {
        parent::__construct('', 0, null);
    }

    public function getMessageKey()
    {
        return 'Une demande de réinitialisation est déjà en cours pour ce compte';
    }
}