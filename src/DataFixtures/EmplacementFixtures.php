<?php

namespace App\DataFixtures;

use App\Entity\Emplacement;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\UserFixtures;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class EmplacementFixtures extends Fixture implements DependentFixtureInterface
{
    public const EMPLACEMENT = 'emplacement';

    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');
        
        $userAdmin = $this->getReference(UserFixtures::ADMIN_REFERENCE);

        $now = new \DateTime();
        $days = $now->diff($userAdmin->getCreatedAt())->days;
        $minimun = '-' . $days . ' days';

        $emplacement = new Emplacement();
        $emplacement->setName('placard')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($emplacement);

        $emplacement = new Emplacement();
        $emplacement->setName('armoir')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($emplacement);

        $emplacement = new Emplacement();
        $emplacement->setName('frigo')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($emplacement);

        $emplacement = new Emplacement();
        $emplacement->setName('congélateur')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($emplacement);

        $emplacement = new Emplacement();
        $emplacement->setName('panier')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($emplacement);

        $manager->flush();

        $this->addReference(self::EMPLACEMENT, $emplacement);
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
