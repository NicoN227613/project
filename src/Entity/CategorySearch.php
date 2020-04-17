<?php
namespace App\Entity;

class CategorySearch {

    /**
     * @var string|null
     */
    private $name;

    /**
     * @param  string|null
     */ 
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     * @return CategorySearch
     */ 
    public function setName(string $name): CategorySearch
    {
        $this->name = $name;

        return $this;
    }
}