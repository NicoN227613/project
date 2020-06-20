<?php

namespace App\Mailing;

use App\Mailing\EmailFactory;
use App\Event\PasswordResetRequestEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Twig\Environment;

class UserSubscriber implements EventSubscriberInterface 
{
    private $factory;
    private $mailer;
    private $renderer;
    
    public function __construct(EmailFactory $factory, \Swift_Mailer $mailer, Environment $renderer)
    {
        $this->factory = $factory;
        $this->mailer = $mailer;
        $this->renderer = $renderer;
    }

    /**
     * @return array<string,string>
     */
    public static function getSubscribedEvents(): array
    {
        return [
            PasswordResetRequestEvent::class => 'onPasswordRequest'
        ];
    }

    public function onPasswordRequest(PasswordResetRequestEvent $event): void
    {
        $email = (new \Swift_Message('Hello Email'))
        ->setFrom('admin@admin.com')
        ->setTo($event->getUser()->getEmail())
        ->setBody(
            $this->renderer->render('mails/user/password_reset.html.twig', [
                'token' => $event->getToken()->getToken(),
                'id' => $event->getUser()->getId(),
                'username' => $event->getUser()->getUsername()
            ]),
            'text/html'
        );
        $this->mailer->send($email);
    }
}
