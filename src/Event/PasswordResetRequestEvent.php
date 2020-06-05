<?php

namespace App\Event;

use App\Entity\User;
use App\Entity\PasswordResetToken;

class PasswordResetRequestEvent
{
    /** @var PasswordResetToken $token */
    private $token;

    public function __construct(PasswordResetToken $token)
    {
        $this->token = $token;
    }

    public function getUser(): User
    {
        return $this->token->getUser();
    }

    public function getToken(): PasswordResetToken
    {
        return $this->token;
    }
}