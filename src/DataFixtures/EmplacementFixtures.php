<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Emplacement;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;

class EmplacementFixtures extends Fixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        // Creéation des emplacements
        $emplacement = new Emplacement();
        $emplacement
            ->setName('Aucun')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($emplacement);

        $emplacement2 = new Emplacement();
        $emplacement2
            ->setName('Réfrigirateur')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($emplacement2);

        $emplacement3 = new Emplacement();
        $emplacement3
            ->setName('Congéateur')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($emplacement3);

        $emplacement4 = new Emplacement();
        $emplacement4
            ->setName('Garde-manger')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($emplacement4);

        $emplacement5 = new Emplacement();
        $emplacement5
            ->setName('Comptoir')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($emplacement5);

        $emplacement6 = new Emplacement();
        $emplacement6
            ->setName('Placard')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($emplacement6);

        $emplacement7 = new Emplacement();
        $emplacement7
            ->setName('Cave')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($emplacement7);
        $manager->flush();

        $this->addReference('emplacement', $emplacement);
        $this->addReference('emplacement-2', $emplacement2);
        $this->addReference('emplacement-3', $emplacement3);
        $this->addReference('emplacement-4', $emplacement4);
        $this->addReference('emplacement-5', $emplacement5);
        $this->addReference('emplacement-6', $emplacement6);
        $this->addReference('emplacement-7', $emplacement7);
    }

    public function getOrder()
    {
        return 3;
    }
}