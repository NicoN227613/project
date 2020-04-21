<?php

namespace App\Repository;

use App\Entity\Product;
use App\Entity\Category;
use App\Entity\ProductSearch;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }
    
    /**
     * @return Query
     */
    public function findAllProducts(ProductSearch $search): Query
    {
        $query =  $this->createQueryBuilder('p')
                        ->orderBy('p.id', 'DESC');

        if($search->getName()) {
            $query = $query->where('p.name LIKE :name')
            ->setParameter('name', $search->getName());
        }

        return $query->getQuery();
    }

    public function findAllProductByUser(int $suserId)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.author = :val')
            ->setParameter('val', $suserId)
            ->getQuery()
            ->getResult();
    }

     /**
     * @return Product[]
     */
    public function findWithCategories()
    {
        return $this->createQueryBuilder('p')
            ->leftjoin('p.classifiedIn', 'c')
            ->addSelect('c')
            ->orderBy('p.purchase_date', 'DESC')
            ->setMaxResults(50)
            ->getQuery()
            ->getResult();
    }
    /**
     * @return Product[]
     */
    public function findWithCategoriesBis()
    {
        $this->getEntityManager()->createQuery(
            'SELECT b, c FROM '.Product::class.' b '.
            'LEFT JOIN b.classifiedIn c '.
            'ORDER BY b.purchase_date DESC'
        )->setMaxResults(50)
        ->getResult();
    }

    public function findByClassifiedInOne(Category $category)
    {
        return $this->createQueryBuilder('b')
        ->join('b.classifiedIn', 'c',
        Join::WITH,'c = :category')
        ->orderBy('b.purchase_date','DESC')
        ->setMaxResults(50)
        ->getQuery()
        ->setParameter('category', $category)
        ->getResult();
    }
}
