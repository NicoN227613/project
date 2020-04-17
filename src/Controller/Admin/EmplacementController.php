<?php

namespace App\Controller\Admin;

use App\Entity\Emplacement;
use App\Form\EmplacementType;
use App\Entity\EmplacementSearch;
use App\Form\EmplacementSearchType;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\EmplacementRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

/**
 * @IsGranted("ROLE_ADMIN")
 */
final class EmplacementController extends BaseController
{
    public function __construct(EmplacementRepository $repository, EntityManagerInterface $manager)
    {
        $this->repository = $repository;
        $this->manager = $manager;
    }

    /**
     * @Route("/emplacements", name="emplacement_index", methods="GET")
     */
    public function index(PaginatorInterface $paginator, Request $request)
    {
        $search = new EmplacementSearch();
        $form = $this->createForm(EmplacementSearchType::class, $search);
        $form-> handleRequest($request);

        $emplacements = $paginator->paginate(
            $this->repository->findAllEmplacements($search),
            $request->query->getInt('page', 1),
            5
        );
        return $this->render('admin/emplacement/index.html.twig', [
            'emplacements' => $emplacements,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("emplacement/new", name="emplacement_new", methods={"GET","POST"})
     */
    public function new(Request $request)
    {
        $emplacement = new Emplacement();
        $form = $this->createForm(EmplacementType::class, $emplacement);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->manager->persist($emplacement);
            $this->manager->flush();

            $this->addFlash('success', 'Nouveau emplacement créé');
            return $this->redirectToRoute('emplacement_index');
        }

        return $this->render('admin/emplacement/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/emplacement/{id}/edit", requirements={"id": "\d+"}, name="emplacement_edit", methods={"GET", "PUT"})
     */
    public function edit(Emplacement $emplacement, Request $request)
    {
        $form = $this->createForm(EmplacementType::class, $emplacement, [
            'method' => 'PUT',
        ]);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->manager->flush();
            $this->addFlash('success', 'L emplacement ' . $emplacement->getName() . ' a bien était modifiée !');
            return $this->redirectToRoute('emplacement_index');
        }
        return $this->render('admin/emplacement/edit.html.twig', [
            'emplacement' => $emplacement,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/emplacement/{id}", name="emplacement_delete", requirements={"id": "\d+"}, methods="DELETE")
     * @ParamConverter("category", options={"id" = "id"})
     */
    public function delete(Emplacement $emplacement, Request $request)
    {
        if($this->isCsrfTokenValid('delete' . $emplacement->getId(), $request->get('_token'))){
            $this->manager->remove($emplacement);
            $this->manager->flush();
            $this->addFlash('success', 'L emplacement ' . $emplacement->getName() . ' a bien était supprimé !');
        }
        return $this->redirectToRoute('emplacement_index');
    }
}