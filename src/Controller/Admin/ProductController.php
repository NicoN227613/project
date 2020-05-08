<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use App\Entity\ProductSearch;
use App\Form\AdminProductType;
use App\Form\ProductSearchType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @IsGranted("ROLE_ADMIN")
 */
final class ProductController extends BaseController
{
    /**
    * @Route("/products", name="product_index", methods="GET")
    */
    public function index(ProductRepository $repository, PaginatorInterface $paginator, Request $request): Response
    {
        $search = new ProductSearch();
        $form = $this->createForm(ProductSearchType::class, $search);
        $form->handleRequest($request);

        $products = $paginator->paginate(
            $repository->findAllProducts($search),
            $request->query->getInt('page', 1),
           12 // Le plus petit dénominateur commun 2,3,4,5 et 6 : 60
        );
        
        return $this->render('admin/product/index.html.twig', [
            'products' => $products,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("product/new", name="product_new", methods={"GET", "POST"})
     */
    public function new(Request $request, EntityManagerInterface $manager, TranslatorInterface $translator): Response
    {
        $product = new Product();
        $product->setAuthor($this->getUser());

        $form = $this->createForm(AdminProductType::class, $product);
        $form->handleRequest($request);
        $message=$translator->trans('Le produit a bien été crée !');

        if($form->isSubmitted() && $form->isValid()) {
            $manager->persist($product);
            $manager->flush();

            $this->addFlash('success', 'Le produit " '. $product->getName() .' " a bien été créé !');
            $this->addFlash('message',$message);

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
    public function edit(Product $product, Request $request, EntityManagerInterface $manager, TranslatorInterface $translator): Response
    {
        $form = $this->createForm(AdminProductType::class, $product, [
            'method' => 'PUT',
        ]);

        $form->handleRequest($request);
        $message=$translator->trans('Le produit a bien été modifié !');

        if($form->isSubmitted() && $form->isValid()) {
            $product->setUpdatedAt(new \DateTime());
            $manager->flush();
            $this->addFlash('success', 'Le produit " '. $product->getName() .' " a bien été modifié !');
            $this->addFlash('message',$message);

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
    public function delete(Product $product, Request $request, EntityManagerInterface $manager, TranslatorInterface $translator): Response
    {
            $message=$translator->trans('Le produit a bien été supprimé !');

        if($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))){
            $manager->remove($product);
            $manager->flush();
            $this->addFlash('success', 'Le produit " '. $product->getName() .' " a bien été supprimé !');
            $this->addFlash('message', $message);
        }
        return $this->redirectToRoute('admin_product_index');
    }
}