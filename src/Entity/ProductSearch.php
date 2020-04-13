<?php

namespace App\Entity;

class ProductSearch {

    /**
     * @var string|null
     */
    private $name;


    /**
     * @param string|null 
     */ 
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     * @return ProductSearch
     */ 
    public function setName(string $name): ProductSearch
    {
        $this->name = $name;

        return $this;
    }
}