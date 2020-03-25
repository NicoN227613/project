<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\DateType;
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
            ->add('purchaseDate', DateType::class, [
                'html5' => true,
                'widget' => 'single_text',
            ])
            ->add('expirationDate', DateType::class, [
                'html5' => true,
                'widget' => 'single_text',
            ])
            ->add('bestBeforeDate', DateType::class, [
                'html5' => true,
                'widget' => 'single_text',
            ])
            ->getForm();

        return $this->render('product/new.html.twig', [
            'new_form' => $form->createView(),
        ]);
    }
}