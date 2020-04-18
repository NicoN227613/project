<?php

namespace App\Controller\Admin;

use App\Entity\Unity;
use App\Entity\UnitySearch;
use App\Form\UnityType;
use App\Form\UnitySearchType;
use App\Repository\UnityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;


/**
 * @IsGranted("ROLE_ADMIN")
 */
final class UnityController extends BaseController 
{
    public function __construct(UnityRepository $repository, EntityManagerInterface $manager)
    {
        $this->repository = $repository;
        $this->manager = $manager;
    }

    /**
     * @Route("/units", name="unity_index", methods="GET")
     */
    public function index(PaginatorInterface $paginator, Request $request)
    {
        $search = new UnitySearch();
        $form = $this->createForm(UnitySearchType::class, $search);
        $form-> handleRequest($request);

        $units = $paginator->paginate(
            $this->repository->findAllUnits($search),
            $request->query->getInt('page', 1),
            7
        );
        return $this->render('admin/unity/index.html.twig', [
            'units' => $units,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("unity/new", name="unity_new", methods={"GET","POST"})
     */
    public function new(Request $request)
    {
        $unity = new Unity();
        $form = $this->createForm(UnityType::class, $unity);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->manager->persist($unity);
            $this->manager->flush();

            $this->addFlash('success', 'Nouvelle unité créée');
            return $this->redirectToRoute('unity_index');
        }

        return $this->render('admin/unity/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/unity/{id}/edit", requirements={"id": "\d+"}, name="unity_edit", methods={"GET", "PUT"})
     */
    public function edit(Unity $unity, Request $request)
    {
        $form = $this->createForm(UnityType::class, $unity, [
            'method' => 'PUT',
        ]);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->manager->flush();
            $this->addFlash('success', 'L unité ' . $unity->getName() . ' a bien était modifiée !');
            return $this->redirectToRoute('unity_index');
        }
        return $this->render('admin/category/edit.html.twig', [
            'unity' => $unity,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/unity/{id}", name="unity_delete", requirements={"id": "\d+"}, methods="DELETE")
     * @ParamConverter("unity", options={"id" = "id"})
     */
    public function delete(Unity $unity, Request $request)
    {
        if($this->isCsrfTokenValid('delete' . $unity->getId(), $request->get('_token'))){
            $this->manager->remove($unity);
            $this->manager->flush();
            $this->addFlash('success', 'L unité ' . $unity->getName() . ' a bien était supprimée !');
        }
        return $this->redirectToRoute('unity_index');
    }

}