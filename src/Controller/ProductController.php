<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
* @Route("/product")
*/
class ProductController extends AbstractController
{
    /**
    * @Route("", methods="GET")
    */
    public function index(ProductRepository $repository)
    {
        $products = $repository->findAll();

        return $this->render('product/index.html.twig', [
            'products' => $products,
        ]);
    }

    /**
     * @Route("/{id}", requirements={"id": "\d+"})
     */
    public function show(int $id, ProductRepository $repository)
    {
        $product = $repository->find($id);

        if(!$product) {
            throw $this->createNotFoundException("Ce produit n'existe pas");
        }

        return $this->render('product/show.html.twig', [
            'product' => $product,
        ]);
    }
}