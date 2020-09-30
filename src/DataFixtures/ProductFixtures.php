<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ProductFixtures extends Fixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        // Création des différents produits pour l'administrateur
        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-2'))
                ->setPlaceIn($this->getReference('emplacement-6'))
                ->setUnits($this->getReference('unity-2'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-3'))
                ->setPlaceIn($this->getReference('emplacement-6'))
                ->setUnits($this->getReference('unity-2'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-4'))
                ->setPlaceIn($this->getReference('emplacement-2'))
                ->setUnits($this->getReference('unity-2'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-5'))
                ->setPlaceIn($this->getReference('emplacement-2'))
                ->setUnits($this->getReference('unity-8'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-6'))
                ->setPlaceIn($this->getReference('emplacement-3'))
                ->setUnits($this->getReference('unity-5'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-7'))
                ->setPlaceIn($this->getReference('emplacement'))
                ->setUnits($this->getReference('unity-2'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-8'))
                ->setPlaceIn($this->getReference('emplacement-5'))
                ->setUnits($this->getReference('unity-6'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-9'))
                ->setPlaceIn($this->getReference('emplacement-2'))
                ->setUnits($this->getReference('unity-9'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-10'))
                ->setPlaceIn($this->getReference('emplacement-2'))
                ->setUnits($this->getReference('unity-4'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-11'))
                ->setPlaceIn($this->getReference('emplacement-2'))
                ->setUnits($this->getReference('unity-5'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-12'))
                ->setPlaceIn($this->getReference('emplacement-4'))
                ->setUnits($this->getReference('unity-9'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }

        for($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product
                ->setName($faker->lexify(str_repeat('?', mt_rand(4, 12))))
                ->setQuantity($faker->randomDigitNotNull)
                ->setClassifiedIn($this->getReference('category-13'))
                ->setPlaceIn($this->getReference('emplacement-7'))
                ->setUnits($this->getReference('unity-11'))
                ->setPurchaseDate($faker->dateTimeThisMonth())
                ->setExpirationDate($faker->dateTimeBetween($product->getPurchaseDate(), '+ 15 days'))
                ->setAuthor($this->getReference('admin-user'))
                ->setCreatedAt($faker->dateTimeBetween($product->getPurchaseDate(), $product->getExpirationDate()))
                ->setUpdatedAt($faker->dateTimeBetween($product->getCreatedAt(), $product->getExpirationDate()));

            $manager->persist($product);
        }
        $manager->flush();
    }

    public function getOrder()
    {
        return 5;
    }
}