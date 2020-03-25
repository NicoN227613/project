<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
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
     * @Route("/new", methods={"GET", "POST"})
     */
    public function new(Request $request, EntityManagerInterface $manager)
    {
        $product = new Product();

        $form = $this->createFormBuilder($product)
            ->add('name', null, [
                'label' => 'Nom'
            ])
            ->add('category', null, [
                'label' => 'Catégorie'
            ])
            ->add('emplacement', null, [
                'label' => 'Emplacement'
            ])
            ->add('quantity', null, [
                'label' => 'Quantité'
            ])
            ->add('unity', null, [
                'label' => 'Unité'
            ])
            ->add('purchaseDate', DateType::class, [
                'html5' => true,
                'widget' => 'single_text',
                'label' => 'Acheté le'
            ])
            ->add('expirationDate', DateType::class, [
                'html5' => true,
                'widget' => 'single_text',
                'label' => 'A consommer avant le'
            ])
            ->add('bestBeforeDate', DateType::class, [
                'html5' => true,
                'widget' => 'single_text',
                'label' => 'A consommer de préférence avant le'
            ])
            ->getForm();

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->persist($product);
            $manager->flush();

            $this->addFlash('success', 'Nouveau produit créé');
            return $this->redirectToRoute('app_product_show', [
                'id' => $product->getId(),
            ]);
        }

        return $this->render('product/new.html.twig', [
            'new_form' => $form->createView(),
        ]);
    }
}