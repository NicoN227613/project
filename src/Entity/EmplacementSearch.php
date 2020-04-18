<?php

namespace App\Entity;

class EmplacementSearch {

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
     * @return EmplacementSearch
     */ 
    public function setName(string $name): EmplacementSearch
    {
        $this->name = $name;

        return $this;
    }
}