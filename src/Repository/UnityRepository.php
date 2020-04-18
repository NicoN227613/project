<?php

namespace App\Repository;

use App\Entity\Unity;
use Doctrine\ORM\Query;
use App\Entity\UnitySearch;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Units|null find($id, $lockMode = null, $lockVersion = null)
 * @method Units|null findOneBy(array $criteria, array $orderBy = null)
 * @method Units[]    findAll()
 * @method Units[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Unity::class);
    }

    /**
     * @return Query
     */
    public function findAllUnits(UnitySearch $search): Query
    {
        $query =  $this->createQueryBuilder('u')
                        ->orderBy('u.id', 'DESC');

        if($search->getName()) {
            $query = $query->where('u.name LIKE :name')
            ->setParameter('name', $search->getName());
        }

        return $query->getQuery();
    }

    // /**
    //  * @return Units[] Returns an array of Units objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Units
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
