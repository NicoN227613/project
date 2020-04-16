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
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @IsGranted("ROLE_ADMIN")
 */
final class CategoryController extends BaseController
{
    public function __construct(CategoryRepository $repository, EntityManagerInterface $manager)
    {
        $this->repository = $repository;
        $this->manager = $manager;
    }
    /**
     * @Route("/categories", name="category_index", methods="GET")
     */
    public function index(PaginatorInterface $paginator, Request  $request)
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
    public function new(Request $request)
    {
        $category = new Category();
        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->manager->persist($category);
            $this->manager->flush();

            $this->addFlash('success', 'Nouvelle catégorie créée');
            return $this->redirectToRoute('category_index');
        }
        return $this->render('admin/category/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

}