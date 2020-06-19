<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;

final class PasswordResetData
{
    /**
     * @var string
     * @Assert\Email()
     * @Assert\NotBlank()
     */
    public $email = '';

    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */ 
    public function setEmail(string $email): PasswordResetData
    {
        $this->email = $email;
        return $this;
    }
}