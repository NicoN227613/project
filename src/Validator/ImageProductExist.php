<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

class ImageProductExist extends Constraint
{
    /** @var string $message */
    public $message = "Aucun fichier ne correspond à l'id {{ id }}";
}
