<?php

namespace App\Validator;

use App\Validator\ImageProductExist;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class ImageProductExistValidator extends ConstraintValidator
{
    /**
     * @param mixed $value
     * @param ImageProductExist $constraint
     */
    public function validate($value, Constraint $constraint): void
    {
        if (!$value instanceof NotExistImageProduct) {
            return;
        }
        $this->context
            ->buildViolation($constraint->message)
            ->setParameter('{{ id }}', (string)$value->getId())
            ->addViolation();     
    }
}
