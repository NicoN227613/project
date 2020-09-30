<?php

namespace App\Service;

use App\Entity\ImageProduct;
use App\Validator\NotExistImageProduct;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class ImageUrlGenerator
{
    private $helper;

    public function __construct(UploaderHelper $helper)
    {
        $this->helper = $helper;
    }

    public function generate(?ImageProduct $imageProduct): ?string
    {
        if ($imageProduct === null || $imageProduct instanceof NotExistImageProduct) {
            return null;
        }
        return $this->helper->asset($imageProduct);
    }
}
