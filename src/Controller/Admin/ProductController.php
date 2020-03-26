<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use App\Form\ProductType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin/product")
 */
class ProductController extends AbstractController 
{
    /**
     * @Route("/new", methods={"GET", "POST"})
     * @IsGranted("ROLE_AUTHOR")
     */
    public function new(Request $request, EntityManagerInterface $manager)
    {
        $product = new Product();
        $product->setAuthor($this->getUser());

        $form = $this->createForm(ProductType::class, $product);

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

    /**
     * @Route("/{id}/edit", methods={"GET", "PUT"})
     */
    public function edit(Product $product, Request $request, EntityManagerInterface $manager){
        
        $form = $this->createForm(ProductType::class, $product, [
            'method' => 'PUT',
        ]);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->flush();
            $this->addFlash('success', 'Le produit ' . $product->getName() . ' a bien était modifié !');
            return $this->redirectToRoute('app_product_show', [
                'id' => $product->getId(),
            ]);
        }
        return $this->render('product/edit.html.twig', [
            'product' => $product,
            'edit_form' => $form->createView(),
        ]);
    }
}