<?php
namespace App\Validator;

use App\Entity\ImageProduct;

/**
 * Représente une image d'un produit qui n'existe pas en base de données
 */
class NotExistImageProduct extends ImageProduct
{
    public function __construct(int $expectedId)
    {
        $this->id = $expectedId;
    }
}