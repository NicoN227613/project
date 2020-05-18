<?php

namespace App\Entity;

use App\Entity\User;
use App\Entity\Category;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @Vich\Uploadable()
 */
class Product
{
    /**
     * @var int
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string|null
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $filename;

    /**
     * @var File|null
     * @Vich\UploadableField(mapping="product_image", fileNameProperty="filename")
     */
    private $imageFile;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank()
     * @Assert\Length(
     *      min=4, 
     *      minMessage="Le nom du produit doit avoir au minimum 4 caractères",
     * )
     */
    private $name;

    /**
     * @var float
     * @ORM\Column(type="float")
     * @Assert\NotBlank()
     * @Assert\GreaterThan(0, message="Définissez une quantité ")
     */
    private $quantity;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\LessThanOrEqual(
     *  "today", 
     *  message="Choisissez une date inférieur ou égale à la date d'aujourd'hui !"
     * )
     */
    private $purchase_date;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\GreaterThanOrEqual(
     *  propertyPath="purchase_date", 
     *  message="La Date Limite de Consomation doit être supérieur ou égale à la date d'achat du produit"
     * )
     */
    private $expiration_date;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\GreaterThanOrEqual(
     *  propertyPath="purchase_date", 
     *  message="La Date à Durée Minimale supérieur ou égale à la date d'achat du produit "
     * )
     */
    private $best_before_date;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @var \DateTimeInterface|null $updatedAt
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @var Category|null $classifiedIn
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $classifiedIn;

    /**
     * @var Emplacement|null $placeIn
     * @ORM\ManyToOne(targetEntity="App\Entity\Emplacement", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $placeIn;

    /**
     * @var Unity|null $units
     * @ORM\ManyToOne(targetEntity="App\Entity\Unity", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $units;

    /**
     * @var User|null $author
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $author;

    public function __construct() {
        $this->createdAt = new \DateTimeImmutable();
        //$this->updateAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getQuantity(): ?float
    {
        return $this->quantity;
    }

    public function setQuantity(float $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getPurchaseDate(): \DateTimeInterface
    {
        return $this->purchase_date;
    }

    public function setPurchaseDate(\DateTimeInterface $purchase_date): self
    {
        $this->purchase_date = $purchase_date;

        return $this;
    }

    public function getExpirationDate(): ?\DateTimeInterface
    {
        return $this->expiration_date;
    }

    public function setExpirationDate(?\DateTimeInterface $expiration_date): self
    {
        $this->expiration_date = $expiration_date;

        return $this;
    }

    public function getBestBeforeDate(): ?\DateTimeInterface
    {
        return $this->best_before_date;
    }

    public function setBestBeforeDate(?\DateTimeInterface $best_before_date): self
    {
        $this->best_before_date = $best_before_date;

        return $this;
    }

    public function getCreatedAt(): \DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Category
     */
    public function getClassifiedIn(): ?Category
    {
        return $this->classifiedIn;
    }

    public function setClassifiedIn(?Category $classifiedIn): self
    {
        $this->classifiedIn = $classifiedIn;

        return $this;
    }
    
    /**
     * @return Emplacement
     */
    public function getPlaceIn(): ?Emplacement
    {
        return $this->placeIn;
    }

    public function setPlaceIn(?Emplacement $placeIn): self
    {
        $this->placeIn = $placeIn;
        return $this;
    }

    /**
     * @return Unity
     */
    public function getUnits(): ?Unity
    {
        return $this->units;
    }

    public function setUnits(?Unity $units): self
    {
        $this->units = $units;
        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;
        return $this;
    }

    /**
     * @return null|string
     */ 
    public function getFilename(): ?string
    {
        return $this->filename;
    }

    /**
     * @param null|string $filename
     * @return Product
     */ 
    public function setFilename(?string $filename): Product
    {
        $this->filename = $filename;
        return $this;
    }
    
    /**
     * @return null|File
     */ 
    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    /**
     * @param null|File $imageFile
     * @return Product
     */ 
    public function setImageFile(?File $imageFile): Product
    {
        $this->imageFile = $imageFile;
        if ($this->imageFile instanceof UploadedFile) {
            $this->updatedAt = new \DateTime('now');
        }
        return $this;
    }
}
