<?php

namespace App\DataFixtures;


use App\Entity\Unity;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\UserFixtures;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class UnityFixtures extends Fixture implements DependentFixtureInterface
{
    public const UNITY = 'unity';

    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');
        
        $userAdmin = $this->getReference(UserFixtures::ADMIN_REFERENCE);

        $now = new \DateTime();
        $days = $now->diff($userAdmin->getCreatedAt())->days;
        $minimun = '-' . $days . ' days';

        $unity = new Unity();
        $unity->setName('A la pièce')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($unity);

        $unity = new Unity();
        $unity->setName('kg')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($unity);

        $unity = new Unity();
        $unity->setName('litre')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($unity);

        $unity = new Unity();
        $unity->setName('boite')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($unity);

        $unity = new Unity();
        $unity->setName('sachet')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($unity);


        $manager->flush();

        $this->addReference(self::UNITY, $unity);
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
