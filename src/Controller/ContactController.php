<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Notification\ContactNotification;
use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{

    /**
     * @Route("/contact", name="contact", methods={"GET", "POST"})
     */
    public function contact(Request $request, ContactNotification $notification)
    {
        $contact = new Contact();
        $contact->setPseudo($this->getUser()->getPseudo());
        $contact->setEmail($this->getUser()->getEmail());

        $form = $this->createForm(ContactType::class, $contact); 

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {

            $notification->notify($contact);

            $this->addFlash('success', 'Votre Email a bien été envoyer !');
            return $this->redirectToRoute('contact');
        }

        return $this->render('contact/contact.html.twig', [
            'formContact' => $form->createView()
        ]);
    }
}
