<?php

namespace App\Controller;

use App\Entity\PasswordResetConfirmData;
use App\Entity\User;
use App\Form\RegistrationType;
use App\Entity\PasswordResetData;
use App\Entity\PasswordResetToken;
use App\Form\PasswordResetConfirmType;
use App\Repository\UserRepository;
use App\Form\PasswordResetRequestForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Notification\CreateAccountNotification;
use App\Service\PasswordResetService;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    /**
     * @var CreateAccountNotification
     */
    private $createAccountNotify;

    public function __construct(CreateAccountNotification $createAccountNotify)
    {
        $this->createAccountNotify = $createAccountNotify;
    }

    /**
     *@Route("/registration", name="security_registration")
     */
    public function registration(Request $request, EntityManagerInterface $manager, UserPasswordEncoderInterface $encoder): Response
    {
        $user = new User();

        $form = $this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $hash = $encoder->encodePassword($user, $user->getPassword());

            $user->setActivationToken(md5(uniqid()));

            $user->setPassword($hash);
            $manager->persist($user);
            $manager->flush();
            
            $this->createAccountNotify->notifyCreateAccountForAdmin();
            $this->createAccountNotify->notifyCreateAccountForUser($user);

            $this->addFlash('success', 'Votre compte a bien était créé, Connectez-vous !');
            return $this->redirectToRoute('security_login');
        }
        return $this->render('security/registration.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/activation/{token}", name="activation")
     */
    public function activation($token, UserRepository $userRepo, EntityManagerInterface $manager): Response
    {
        // vérifie si un utilisateur a ce token
        $user = $userRepo->findOneBy(['activation_token' => $token]);

        if(!$user){// 0 user
            throw $this->createNotFoundException('cet utilisateur n\'existe pas');
        }

        $user->setActivationToken(null); // supprime le token
        $manager->persist($user);
        $manager->flush();
        
        $this->addFlash('success', 'votre compte est bien activer !');
        return $this->redirectToRoute('home');
    }

    /**
     * @Route("/login", name="security_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
             return $this->redirectToRoute('product_index');
         }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername, 
            'error' => $error
        ]);
    }

    /**
     * @Route("/password-reset", name="security_password_reset")
     */
    public function passwordReset(Request $request, PasswordResetService $resetService): Response 
    {
        $error = null;
        $data = new PasswordResetData();
        $form = $this->createForm(PasswordResetRequestForm::class, $data);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
            try {
                $resetService->resetPassword($form->getData());
                $this->addFlash('success', 'Les instructions pour réinitialiser votre mot de passe vous ont été envoyées');
                return $this->redirectToRoute('security_login');
            } catch (\Exception $e) {
                $error = $e;
            }
        }
        return $this->render('security/password_reset.html.twig', [
            'error' => $error,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/password/new/{id}/{token}",  name="security_password_reset_confirm")
     */
    public function passwordResetConfirm(Request $request, User $user, PasswordResetToken $token, PasswordResetService $service): Response
    {
        if ($service->isExpired($token) || $token->getUser() !== $user) {
            $this->addFlash('error', 'Ce token a expiré');
            return $this->redirectToRoute('security_login');
        }
        $error = null;
        $data = new PasswordResetConfirmData();
        $form = $this->createForm(PasswordResetConfirmType::class, $data);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $service->updatePassword($data->getPassword(),$user);
            $this->addFlash('success', 'Votre mot de passe a bien été réinitialisé');
            return $this->redirectToRoute('security_login');
        }
        return $this->render('security/password_reset_confirm.html.twig', [
            'error' => $error,
            'form' => $form->createView($error)
        ]);
    }

    /**
     * @Route("/logout", name="security_logout")
     */
    public function logout(): void
    {
        //throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
