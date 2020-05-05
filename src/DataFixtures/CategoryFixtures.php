<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Category;
use App\DataFixtures\UserFixtures;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CategoryFixtures extends Fixture implements DependentFixtureInterface
{

    public const CATEGORY = 'category';

    public function load(ObjectManager $manager)
    {

        $faker = \Faker\Factory::create('fr_FR');
        
        $userAdmin = $this->getReference(UserFixtures::ADMIN_REFERENCE);

        $now = new \DateTime();
        $days = $now->diff($userAdmin->getCreatedAt())->days;
        $minimun = '-' . $days . ' days';

        $category = new Category();
        $category->setName('produits laitiers')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($category);

        $category = new Category();
        $category->setName('fruits de mer')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($category);

        $category = new Category();
        $category->setName('fruit et légumes')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($category);

        $category = new Category();
        $category->setName('aliments transformé')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($category);

        $category = new Category();
        $category->setName('viandes')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($category);

        $category = new Category();
        $category->setName('féculents')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($category);

        $category = new Category();
        $category->setName('conserve')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin)
        ;
        $manager->persist($category);


        $manager->flush();

        $this->addReference(self::CATEGORY, $category);
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
