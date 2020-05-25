<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Notification\ContactNotification;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{

    /**
     * @Route("/contact", name="contact", methods={"GET", "POST"})
     */
    public function contact(Request $request, ContactNotification $notification): Response
    {
        $user = $this->getUser();
        $contact = new Contact();
        $contact->setPseudo($user->getPseudo());
        $contact->setEmail($user->getEmail());
        
        $form = $this->createForm(ContactType::class, $contact); 

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $notification->notify($user, $contact);

            $this->addFlash('success', 'Votre email a bien été envoyé !');
            return $this->redirectToRoute('contact');
        }

        return $this->render('contact/contact.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
