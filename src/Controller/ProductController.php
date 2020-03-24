<?php

namespace App\Controller;

use DateTime;

use App\Entity\Product;
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
    public function show(Product $product)
    {
        return $this->render('product/show.html.twig', [
            'product' => $product,
        ]);
    }

    /**
     * @Route("/new")
     */
    public function new()
    {
        $product = new Product();

        $form = $this->createFormBuilder($product)
            ->add('name')
            ->add('category')
            ->add('emplacement')
            ->add('quantity')
            ->add('unity')
            ->add('purchaseDate', DateTime::class, [
                'html5' => true,
                'widget' => 'single text',
            ])
            ->add('expirationDate', DateTime::class, [
                'html5' => true,
                'widget' => 'single text',
            ])
            ->add('bestBeforeDate', DateTime::class, [
                'html5' => true,
                'widget' => 'single text',
            ])
            ->getForm();

        return $this->render('product/new.html.twig', [
            'new_form' => $form->createView(),
        ]);
    }
}