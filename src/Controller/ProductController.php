<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/product")
 */
class ProductController extends AbstractController
{
    public function __construct(ProductRepository $repository, EntityManagerInterface $manager)
    {
        $this->repository = $repository;
        $this->manager = $manager;
    }

    /**
    * 
    * @Route("", name="product_index", methods="GET")
    */
    public function index()
    {
        $userCurrent =$this->getUser()->getId();
        $products = $this->repository->findAllProductByUser($userCurrent);
        return $this->render('product/index.html.twig', [
            'products' => $products,
        ]);
    }

    /**
     * @Route("/{id}", name="product_show", requirements={"id": "\d+"})
     * @IsGranted("PRODUCT", subject="product")
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
     * @Route("/new", name="product_new")
     */
    public function new(Request $request)
    {
        $product = new Product();
        $product->setAuthor($this->getUser());
        $form = $this->createForm(ProductType::class, $product);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->manager->persist($product);
            $this->manager->flush();
            $this->addFlash('success', 'Votre produit ' . $product->getName() . ' a bien était crée !');
            return $this->redirectToRoute('product_index');
        }

        return $this->render('product/new.html.twig', [
            'product' => $product,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/{id}/edit", name="product_edit", requirements={"id": "\d+"}, methods={"GET", "PUT"})
     * @IsGranted("PRODUCT", subject="product")
     */
    public function edit(Product $product, Request $request)
    {
        $form = $this->createForm(ProductType::class, $product, [
            'method' => 'PUT',
        ]);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->manager->flush();
            $this->addFlash('success', 'Votre produit ' . $product->getName() . ' a bien était modifié !');
            return $this->redirectToRoute('product_index');
        }

        return $this->render('product/edit.html.twig', [
            'product' => $product,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/{id}", name="product_delete", requirements={"id": "\d+"}, methods="DELETE")
     * @IsGranted("PRODUCT", subject="product")
     */
    public function delete(Product $product, Request $request)
    {
        if($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))){
            $this->manager->remove($product);
            $this->manager->flush();
            $this->addFlash('success', 'Votre produit ' . $product->getName() . ' a bien était supprimé !');
        }
        return $this->redirectToRoute('product_index');
    }
}
