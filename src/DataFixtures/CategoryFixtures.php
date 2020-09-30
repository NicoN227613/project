<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Faker\Factory;

class CategoryFixtures extends Fixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        // Création des catégories
        $category = new Category();
        $category
            ->setName('Aucune')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category);

        $category2 = new Category();
        $category2
            ->setName('Fruits')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category2);

        $category3 = new Category();
        $category3
            ->setName('Légumes')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category3);

        $category4 = new Category();
        $category4
            ->setName('Viandes')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category4);

        $category5 = new Category();
        $category5
            ->setName('Poissons')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category5);

        $category6 = new Category();
        $category6
            ->setName('Fruits de mer et crustacés')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category6);

        $category7 = new Category();
        $category7
            ->setName('Pain et céréales')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category7);

        $category8 = new Category();
        $category8
            ->setName('Céréales et féculents')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category8);

        $category9 = new Category();
        $category9
            ->setName('Produits laitiers')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category9);

        $category10 = new Category();
        $category10
            ->setName('Desserts et sucré')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category10);

        $category11 = new Category();
        $category11
            ->setName('Plats préparés et snacks')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category11);

        $category12 = new Category();
        $category12
            ->setName('Condiments et épices')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category12);

        $category13 = new Category();
        $category13
            ->setName('Boissons')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($category13);
        $manager->flush();

        $this->addReference('category', $category);
        $this->addReference('category-2', $category2);
        $this->addReference('category-3', $category3);
        $this->addReference('category-4', $category4);
        $this->addReference('category-5', $category5);
        $this->addReference('category-6', $category6);
        $this->addReference('category-7', $category7);
        $this->addReference('category-8', $category8);
        $this->addReference('category-9', $category9);
        $this->addReference('category-10', $category10);
        $this->addReference('category-11', $category11);
        $this->addReference('category-12', $category12);
        $this->addReference('category-13', $category13);
    }

    public function getOrder()
    {
        return 2;
    }
}