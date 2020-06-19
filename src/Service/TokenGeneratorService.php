<?php

namespace App\Service;

class TokenGeneratorService 
{
    /**
     * Générer une chaîne de caractères aléatoire d'une taille définie
     */
    public function generateToken(int $length = 25): string
    {
        return substr(bin2hex(random_bytes((int)ceil($length / 2))), 0, $length);
    }
}