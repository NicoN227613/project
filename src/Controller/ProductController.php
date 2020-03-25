<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
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
    public function show(Product $product, ValidatorInterface $validator)
    {
        // pas utile ici, juste pour un exemple de validation hors formulaire
        $errors = $validator->validate($product);
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
