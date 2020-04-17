<?php

namespace App\Entity;

class UnitySearch {

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
     * @return UnitySearch
     */ 
    public function setName(string $name): UnitySearch
    {
        $this->name = $name;

        return $this;
    }
}