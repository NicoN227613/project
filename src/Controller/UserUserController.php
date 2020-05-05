<?php

namespace App\Controller;

use App\Form\ImageType;
use App\Entity\Image;
use App\Entity\User;
use App\Form\UserImageType;
use App\Form\RegistrationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/user")
 */
class UserUserController extends AbstractController
{
    public function __construct( EntityManagerInterface $manager, UserPasswordEncoderInterface $encoder)
    {
        $this->manager = $manager;
        $this->encoder = $encoder;
    }

    /**
     * @Route("/view", name="user_user_index", methods="GET")
     */
    public function index()
    {
        $user = $this->getUser();
        return $this->render('user/index.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/upload/image", name="user_image", methods={"GET", "POST"})
     */
    public function uploadImage(Request $request)
    {
        $user = $this->getUser();
         $form = $this->createForm(UserImageType::class, $user, [
             'method' => 'POST'
         ]);

         $form->handleRequest($request);

         if($form->isSubmitted() && $form->isValid()) {

            $this->manager->persist($user);
            $this->manager->flush();

            $this->addFlash('success', "Votre image est bien enregistré !");

            return $this->redirectToRoute('user_user_index');
         }

        return $this->render('user/upload/image.html.twig', [
            'formImage' => $form->createView(),
        ]);
    }

    /**
     * @Route("/edit", name="user_user_edit", requirements={"id": "\d+"}, methods={"GET", "PUT"})
     */
    public function edit (Request $request, UserPasswordEncoderInterface $encoder)
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
    public function delete(Request $request)
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


    /**
     * @Route("/delete/image/{id}", name="user_image_delete", methods="DELETE")
     */
    public function deleteImage(Image $image, Request $request)
    {
        $user = $this->getUser();
        if($this->isCsrfTokenValid('delete' . $image->getId(), $request->get('_token'))){
            
            $this->manager->remove($image);
            $user->setImage(null); //dissocier Image.php a User.php
            $this->manager->flush();
            $this->addFlash('success',"Votre image a été supprimé !");
        }
        return $this->redirectToRoute('user_image');
    }
}
