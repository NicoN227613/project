<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use App\Form\ProductType;
use App\Entity\ProductSearch;
use App\Form\ProductSearchType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

/**
 * @IsGranted("ROLE_ADMIN")
 */
final class ProductController extends BaseController
{
    /**
    * @Route("/products", name="product_index", methods="GET")
    */
    public function index(ProductRepository $repository, PaginatorInterface $paginator, Request $request)
    {
        $search = new ProductSearch();
        $form = $this->createForm(ProductSearchType::class, $search);
        $form->handleRequest($request);

        $products = $paginator->paginate(
            $repository->findAllProducts($search),
            $request->query->getInt('page', 1),
            7
        );
        
        return $this->render('admin/product/index.html.twig', [
            'products' => $products,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("product/new", name="product_new", methods={"GET", "POST"})
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
            return $this->redirectToRoute('admin_product_index', [
                'id' => $product->getId(),
            ]);
        }

        return $this->render('admin/product/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/product/{id}/edit", name="product_edit", methods={"GET", "PUT"})
     */
     // @IsGranted("PRODUCT_EDIT", subject="product")
    public function edit(Product $product, Request $request, EntityManagerInterface $manager)
    {

        $form = $this->createForm(ProductType::class, $product, [
            'method' => 'PUT',
        ]);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $product->setUpdatedAt(new \DateTime());
            $manager->flush();
            $this->addFlash('success', 'Le produit ' . $product->getName() . ' a bien était modifié !');
            return $this->redirectToRoute('admin_product_index');
        }
        return $this->render('admin/product/edit.html.twig', [
            'product' => $product,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/product/{id}", name="product_delete", requirements={"id": "\d+"}, methods="DELETE")
     * @ParamConverter("product", options={"id" = "id"})
     */
    public function delete(Product $product, Request $request, EntityManagerInterface $manager)
    {
        if($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))){
            $manager->remove($product);
            $manager->flush();
            $this->addFlash('success', 'Le produit ' . $product->getName() . ' a bien était supprimé!');
        }
        return $this->redirectToRoute('admin_product_index');
    }
}