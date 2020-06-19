<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;

final class PasswordResetConfirmData
{
    /**
     * @var string
     * @Assert\NotBlank()
     * @Assert\NotCompromisedPassword()
     * @Assert\Length(
     *      min=8, 
     *      max=255,
     *      minMessage="Votre mot de passe doit comporter au minimum 8 caractères"
     * )
     */
    public $password;

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;
        return $this;
    }
}