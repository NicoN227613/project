<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture implements OrderedFixtureInterface
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
        $admin = new User();
        $admin
            ->setPseudo('Admin')
            ->setEmail('admin@gmail.com')
            ->setPassword($this->passwordEncoder->encodePassword($admin, 'Admin0123456789'))
            ->setRoles(["ROLE_ADMIN"])
            ->setCreatedAt($faker->dateTime());
        $manager->persist($admin);

        // Création des utilisateurs
        for($i = 1; $i <= 10; $i++) {
            $user = new User();
            $user
                ->setPseudo($faker->firstName())
                ->setEmail($faker->unique()->freeEmail)
                ->setPassword($this->passwordEncoder->encodePassword($user, 'User0123456789'))
                ->setRoles(["ROLE_USER"])
                ->setCreatedAt($faker->dateTime());
            $manager->persist($user);
        }
        $manager->flush();

        $this->addReference('admin-user', $admin);
        $this->addReference('user', $user);
    }

    public function getOrder()
    {
        return 1;
    }
}