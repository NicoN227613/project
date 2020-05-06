<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

// faire cette commande pour les envoyers en base de donnée
// php bin/console doctrine:fixtures:load

class UserFixtures extends Fixture
{

    private $passwordEncoder;

    public const ADMIN_REFERENCE = 'ROLE_ADMIN';
    public const USER_REFERENCE = 'ROLE_USER';

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');

        $userAdmin = new User();
        $userAdmin->setPseudo('admin')
            ->setEmail('admin@gmail.com')
            ->setPassword($this->passwordEncoder->encodePassword($userAdmin, 'adminadmin'))
            ->setRoles(["ROLE_ADMIN"])
            ->setCreatedAt($faker->dateTimeBetween('- 2 months'))
        ;
        $manager->persist($userAdmin);

        $now = new \DateTime();
        $days = $now->diff($userAdmin->getCreatedAt())->days;
        $minimun = '-' . $days . ' days';

        
        for($i = 1; $i <= 10; $i++){
            $user = new User();
            $user->setPseudo($faker->firstName())
                ->setEmail($faker->email())
                ->setPassword($faker->password())
                ->setRoles(["ROLE_USER"])
                ->setCreatedAt($faker->dateTimeBetween($minimun))
            ;
            $manager->persist($user);
        }

        $manager->flush();

        $this->addReference(self::USER_REFERENCE, $user);
        $this->addReference(self::ADMIN_REFERENCE, $userAdmin);
    }
}
