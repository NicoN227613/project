<?php

namespace App\Controller;

use App\Form\UserUserType;
use App\Form\RegistrationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/user")
 */
class UserUserController extends AbstractController
{
    private $manager;
    protected $encoder;

    public function __construct( EntityManagerInterface $manager, UserPasswordEncoderInterface $encoder)
    {
        $this->manager = $manager;
        $this->encoder = $encoder;
    }

    /**
     * @Route("/view", name="user_user_index", methods="GET")
     */
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->render('user/index.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/edit", name="user_user_edit", requirements={"id": "\d+"}, methods={"GET", "PUT"}))
     */
    public function edit (Request $request, UserPasswordEncoderInterface $encoder): Response
    {
        $user = $this->getUser();

        $form = $this->createForm(RegistrationType::class, $user, [
            'method' => 'PUT',
        ]);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $hash = $encoder->encodePassword($user, $user->getPassword());
            $user->setPassword($hash);

            $user->setUpdatedAt(new \DateTime());
            $this->manager->flush();

            $this->addFlash('success', "Votre compte avec ce mail : {$user->getEmail()} a bien été modifié !");

            return $this->redirectToRoute('user_user_index');
        }
        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/detlete", name="user_user_delete", methods="DELETE")
     */
    public function delete(Request $request): Response
    {
        $user = $this->getUser();

        if($this->isCsrfTokenValid('delete', $request->get('_token'))){

            $this->manager->remove($user);
            $this->manager->flush($user);
            

            $this->get('security.token_storage')->setToken(null);
            $this->get('session')->invalidate();

            $this->addFlash('success',"Votre compte a été supprimé !");
        }
        return $this->redirectToRoute('security_login');
    }
}
