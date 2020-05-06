<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use App\DataFixtures\UserFixtures;
use App\DataFixtures\CategoryFixtures;
use App\DataFixtures\UnityFixtures;
use App\DataFixtures\EmplacementFixtures;

class ProductFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');
        
        $user           = $this->getReference(UserFixtures::USER_REFERENCE);
        $userAdmin      = $this->getReference(UserFixtures::ADMIN_REFERENCE);
        $category       = $this->getReference(CategoryFixtures::CATEGORY);
        $unity          = $this->getReference(UnityFixtures::UNITY);
        $emplacement    = $this->getReference(EmplacementFixtures::EMPLACEMENT);

        $now = new \DateTime();
        $maxDays = new \DateTime('15 days');

        $daysAdmin = $now->diff($userAdmin->getCreatedAt())->days;
        $minimunAdmin = '-' . $daysAdmin . ' days';

        $adminDays = $faker->dateTimeBetween($minimunAdmin);

        $daysCategory = $adminDays->diff($category->getCreatedAt())->days;
        $minimunCategory = '-' . $daysCategory . ' days';

        $categoryDays = $faker->dateTimeBetween($minimunCategory);

        $daysUnity = $categoryDays->diff($unity->getCreatedAt())->days;
        $minimunUnity = '-' . $daysUnity . ' days';

        $unityDays = $faker->dateTimeBetween($minimunUnity);

        $daysEmplacement = $unityDays->diff($emplacement->getCreatedAt())->days;
        $minimunEmplacement = '-' . $daysEmplacement . ' days';

        $emplacementDays = $faker->dateTimeBetween($minimunEmplacement);

        for($i = 1; $i <= 10; $i++){

            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category)
                ->setPlaceIn($emplacement)
                ->setUnits($unity)
                ->setQuantity($faker->randomDigit())
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays))
            ;

            $daysProduct = $unityDays->diff($product->getCreatedAt())->days;
            $minimunProduct = '-' . $daysProduct . ' days';

            $productDays = $faker->dateTimeBetween($minimunProduct);
            //$expirationDays = $faker->dateTimeBetween($minimunProduct);

            $daysExpiration = $productDays->diff($product->getPurchaseDate())->days;
            $minimunExpiration = '-' . $daysExpiration . ' days';

            $expirationDays = $faker->dateTimeBetween($minimunExpiration, $maxDays);

            $product->setExpirationDate($expirationDays);

            $manager->persist($product);
        }

        for($i = 1; $i <= 10; $i++){

            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($user)
                ->setClassifiedIn($category)
                ->setPlaceIn($emplacement)
                ->setUnits($unity)
                ->setQuantity($faker->randomDigit())
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays))
            ;

            $daysProduct = $unityDays->diff($product->getCreatedAt())->days;
            $minimunProduct = '-' . $daysProduct . ' days';

            $productDays = $faker->dateTimeBetween($minimunProduct);
            //$expirationDays = $faker->dateTimeBetween($minimunProduct);

            $daysExpiration = $productDays->diff($product->getPurchaseDate())->days;
            $minimunExpiration = '-' . $daysExpiration . ' days';

            $expirationDays = $faker->dateTimeBetween($minimunExpiration, $maxDays);

            $product->setExpirationDate($expirationDays);

            $manager->persist($product);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
            CategoryFixtures::class,
            UnityFixtures::class,
            EmplacementFixtures::class,
        ];
    }
}
