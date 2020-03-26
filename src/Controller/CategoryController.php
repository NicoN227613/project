<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\ProductRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/category")
 */
class CategoryController extends AbstractController
{
    /**
     * @Route("/{id}")
     */
    public function show(Category $category, ProductRepository $productRepository) 
    {
        $products = $productRepository->findByClassifiedInOne($category);

        return $this->render('category/show.html.twig', [
            'category' => $category,
            'products' => $products,
        ]);
    }

}