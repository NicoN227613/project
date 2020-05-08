<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Entity\CategorySearch;
use App\Form\CategorySearchType;
use App\Repository\CategoryRepository;
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
final class CategoryController extends BaseController
{
    private $repository;
    private $manager;

    public function __construct(CategoryRepository $repository, EntityManagerInterface $manager)
    {
        $this->repository = $repository;
        $this->manager = $manager;
    }
    /**
     * @Route("/categories", name="category_index", methods="GET")
     */
    public function index(PaginatorInterface $paginator, Request  $request): Response
    {
        $search = new CategorySearch();
        $form = $this->createForm(CategorySearchType::class, $search);
        $form-> handleRequest($request);

        $categories = $paginator->paginate(
            $this->repository->findAllCategories($search),
            $request->query->getInt('page', 1),
            7
        );
        return $this->render('admin/category/index.html.twig', [
            'categories' => $categories,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("category/new", name="category_new", methods={"GET","POST"})
     */
    public function new(Request $request, TranslatorInterface $translator): Response
    {
        $category = new Category();
        $category->setAuthor($this->getUser());
        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($request);
        $message=$translator->trans('La catégorie a bien été créée !');

        if($form->isSubmitted() && $form->isValid()) {
            $this->manager->persist($category);
            $this->manager->flush();

            $this->addFlash('success', 'La catégorie " '. $category->getName() .' " a bien été créée !');
            $this->addFlash('message', $message);

            return $this->redirectToRoute('admin_category_index');
        }
        return $this->render('admin/category/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/category/{id}/edit", requirements={"id": "\d+"}, name="category_edit", methods={"GET", "PUT"})
     */
    public function edit(Category $category, Request $request, TranslatorInterface $translator): Response
    {
        $form = $this->createForm(CategoryType::class, $category, [
            'method' => 'PUT',
        ]);

        $form->handleRequest($request);
        $message=$translator->trans('La catégorie a bien été modifiée !');

        if($form->isSubmitted() && $form->isValid()) {
            $category->setUpdatedAt(new \DateTime());
            $this->manager->flush();
            $this->addFlash('success', 'La catégorie " ' . $category->getName() . ' " a bien été modifiée !');
            $this->addFlash('message', $message);

            return $this->redirectToRoute('admin_category_index');
        }
        return $this->render('admin/category/edit.html.twig', [
            'category' => $category,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/category/{id}", name="category_delete", requirements={"id": "\d+"}, methods="DELETE")
     * @ParamConverter("category", options={"id" = "id"})
     */
    public function delete(Category $category, Request $request, TranslatorInterface $translator): Response
    {
            $message=$translator->trans('La catégorie et le(s) produit(s) associé(s) à cette catégorie ont bien été supprimé(s) !');

        if($this->isCsrfTokenValid('delete' . $category->getId(), $request->get('_token'))){
            $this->manager->remove($category);
            $this->manager->flush();
            $this->addFlash('success', 'La catégorie " ' . $category->getName() . ' "et le(s) produit(s) associé(s) à cette catégorie ont bien été supprimé(s) !');
            $this->addFlash('message',$message);
        }
        return $this->redirectToRoute('admin_category_index');
    }
}