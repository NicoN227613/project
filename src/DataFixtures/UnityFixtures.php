<?php

namespace App\DataFixtures;

use App\Entity\Unity;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Faker\Factory;

class UnityFixtures extends Fixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        // Création des unités
        $unity = new Unity();
        $unity
            ->setName('Aucun')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity);

        $unity2 = new Unity();
        $unity2
            ->setName('A la pièce')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity2);

        $unity3 = new Unity();
        $unity3
            ->setName('morceau(x)')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity3);

        $unity4 = new Unity();
        $unity4
            ->setName('paquet(s)')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity4);

        $unity5 = new Unity();
        $unity5
            ->setName('boîte(s)')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity5);

        $unity6 = new Unity();
        $unity6
            ->setName('sachet(s)')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity6);

        $unity7 = new Unity();
        $unity7
            ->setName('g')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity7);

        $unity8 = new Unity();
        $unity8
            ->setName('Kg')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity8);

        $unity9 = new Unity();
        $unity9
            ->setName('bouteille(s)')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity9);

        $unity10 = new Unity();
        $unity10
            ->setName('canette(s)')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity10);

        $unity11 = new Unity();
        $unity11
            ->setName('L')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity11);

        $unity12 = new Unity();
        $unity12
            ->setName('mL')
            ->setCreatedAt($faker->dateTime())
            ->setAuthor($this->getReference('admin-user'));
        $manager->persist($unity12);
        $manager->flush();

        $this->addReference('unity', $unity);
        $this->addReference('unity-2', $unity2);
        $this->addReference('unity-3', $unity3);
        $this->addReference('unity-4', $unity4);
        $this->addReference('unity-5', $unity5);
        $this->addReference('unity-6', $unity6);
        $this->addReference('unity-7', $unity7);
        $this->addReference('unity-8', $unity8);
        $this->addReference('unity-9', $unity9);
        $this->addReference('unity-10', $unity10);
        $this->addReference('unity-11', $unity11);
        $this->addReference('unity-12', $unity12);
    }

    public function getOrder()
    {
        return 4;
    }
}