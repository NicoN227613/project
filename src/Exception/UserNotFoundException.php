<?php

namespace App\Exception;

use Symfony\Component\Security\Core\Exception\AuthenticationException;

class UserNotFoundException extends AuthenticationException 
{
    public function __construct()
    {
        parent::__construct('', 0, null);
    }

    public function getMessageKey()
    {
        return 'Aucun compte ne correspond à cette email';
    }
}