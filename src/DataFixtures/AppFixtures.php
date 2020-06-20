<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use App\Entity\Unity;
use App\Entity\Product;
use App\Entity\Category;
use App\Entity\Emplacement;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

// faire cette commande pour les envoyers en base de donnée
// php bin/console doctrine:fixtures:load

class AppFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        // Création d'un administrateur
        $userAdmin = new User();
        $userAdmin->setPseudo('Admin')
            ->setEmail('admin@gmail.com')
            ->setPassword($this->passwordEncoder->encodePassword($userAdmin, 'Admin0123456789'))
            ->setRoles(["ROLE_ADMIN"])
            ->setCreatedAt($faker->dateTimeBetween('- 2 months'));
        $manager->persist($userAdmin);

        $now = new \DateTime();
        $maxDays = new \DateTime('15 days');
        $days = $now->diff($userAdmin->getCreatedAt())->days;
        $minimun = '-' . $days . ' days';

        // Création des categories
        $category = new Category();
        $category->setName('Aucune')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category);

        $category2 = new Category();
        $category2->setName('Fruits')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category2);

        $category3 = new Category();
        $category3->setName('Légumes')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category3);

        $category4 = new Category();
        $category4->setName('Viandes')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category4);

        $category5 = new Category();
        $category5->setName('Poissons')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category5);

        $category6 = new Category();
        $category6->setName('Fruits de mer et crustacés')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category6);

        $category7 = new Category();
        $category7->setName('Pain et céréales')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category7);

        $category8 = new Category();
        $category8->setName('Céréales et féculents')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category8);

        $category9 = new Category();
        $category9->setName('Produits laitiers')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category9);

        $category10 = new Category();
        $category10->setName('Desserts et sucré')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category10);

        $category11 = new Category();
        $category11->setName('Plats préparés et snacks')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category11);

        $category12 = new Category();
        $category12->setName('Condiments et épices')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category12);

        $category13 = new Category();
        $category13->setName('Boissons')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($category13);

        // Création des emplacements
        $emplacement = new Emplacement();
        $emplacement->setName('Aucun')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($emplacement);

        $emplacement2 = new Emplacement();
        $emplacement2->setName('Réfrigirateur')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($emplacement2);

        $emplacement3 = new Emplacement();
        $emplacement3->setName('Congéateur')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($emplacement3);

        $emplacement4 = new Emplacement();
        $emplacement4->setName('Garde-manger')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($emplacement4);

        $emplacement5 = new Emplacement();
        $emplacement5->setName('Comptoir')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($emplacement5);

        $emplacement6 = new Emplacement();
        $emplacement6->setName('Placard')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($emplacement6);

        $emplacement7 = new Emplacement();
        $emplacement7->setName('Cave')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($emplacement7);

        // Création des unités
        $unity = new Unity();
        $unity->setName('Aucun')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity);

        $unity2 = new Unity();
        $unity2->setName('A la pièce')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity2);

        $unity3 = new Unity();
        $unity3->setName('morceau(x)')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity3);

        $unity4 = new Unity();
        $unity4->setName('paquet(s)')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity4);

        $unity5 = new Unity();
        $unity5->setName('boîte(s)')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity5);

        $unity6 = new Unity();
        $unity6->setName('sachet(s)')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity6);

        $unity7 = new Unity();
        $unity7->setName('g')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity7);

        $unity8 = new Unity();
        $unity8->setName('Kg')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity8);

        $unity9 = new Unity();
        $unity9->setName('bouteille(s)')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity9);

        $unity10 = new Unity();
        $unity10->setName('canette(s)')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity10);

        $unity11 = new Unity();
        $unity11->setName('L')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity11);

        $unity12 = new Unity();
        $unity12->setName('mL')
            ->setCreatedAt($faker->dateTimeBetween($minimun))
            ->setAuthor($userAdmin);
        $manager->persist($unity12);

        // Création des produits pour l'administrateur
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

        for ($i = 1; $i <= 5; $i++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category2)
                ->setPlaceIn($emplacement6)
                ->setUnits($unity2)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category3)
                ->setPlaceIn($emplacement6)
                ->setUnits($unity2)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category4)
                ->setPlaceIn($emplacement2)
                ->setUnits($unity2)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category5)
                ->setPlaceIn($emplacement2)
                ->setUnits($unity8)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category6)
                ->setPlaceIn($emplacement3)
                ->setUnits($unity5)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category7)
                ->setPlaceIn($emplacement)
                ->setUnits($unity2)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category8)
                ->setPlaceIn($emplacement5)
                ->setUnits($unity6)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category9)
                ->setPlaceIn($emplacement2)
                ->setUnits($unity9)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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
        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category10)
                ->setPlaceIn($emplacement2)
                ->setUnits($unity4)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category11)
                ->setPlaceIn($emplacement2)
                ->setUnits($unity5)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category12)
                ->setPlaceIn($emplacement4)
                ->setUnits($unity9)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        for ($a = 1; $a <= 5; $a++) {
            $product = new Product();
            $product->setName($faker->word())
                ->setCreatedAt($emplacementDays)
                ->setAuthor($userAdmin)
                ->setClassifiedIn($category13)
                ->setPlaceIn($emplacement7)
                ->setUnits($unity11)
                ->setQuantity($faker->randomDigitNotNull)
                ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

        //-------- U S E R -------//
        for ($e = 1; $e <= 10; $e++) {
            $user = new User();
            $user->setPseudo($faker->firstName())
                ->setEmail($faker->freeEmail)
                ->setPassword($this->passwordEncoder->encodePassword($user, 'User0123456789'))
                ->setRoles(["ROLE_USER"])
                ->setCreatedAt($faker->dateTimeBetween($minimun));
            $manager->persist($user);

            // Création des produits des utilisateurs
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

            for ($i = 1; $i <= 5; $i++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category2)
                    ->setPlaceIn($emplacement6)
                    ->setUnits($unity2)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category3)
                    ->setPlaceIn($emplacement6)
                    ->setUnits($unity2)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category4)
                    ->setPlaceIn($emplacement2)
                    ->setUnits($unity2)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category5)
                    ->setPlaceIn($emplacement2)
                    ->setUnits($unity8)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category6)
                    ->setPlaceIn($emplacement3)
                    ->setUnits($unity5)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category7)
                    ->setPlaceIn($emplacement)
                    ->setUnits($unity2)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category8)
                    ->setPlaceIn($emplacement5)
                    ->setUnits($unity6)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category9)
                    ->setPlaceIn($emplacement2)
                    ->setUnits($unity9)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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
            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category10)
                    ->setPlaceIn($emplacement2)
                    ->setUnits($unity4)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category11)
                    ->setPlaceIn($emplacement2)
                    ->setUnits($unity5)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category12)
                    ->setPlaceIn($emplacement4)
                    ->setUnits($unity9)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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

            for ($a = 1; $a <= 5; $a++) {
                $product = new Product();
                $product->setName($faker->word())
                    ->setCreatedAt($emplacementDays)
                    ->setAuthor($user)
                    ->setClassifiedIn($category13)
                    ->setPlaceIn($emplacement7)
                    ->setUnits($unity11)
                    ->setQuantity($faker->randomDigitNotNull)
                    ->setPurchaseDate($faker->dateTimeBetween($emplacementDays));

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
        }
        $manager->flush();
    }
}
