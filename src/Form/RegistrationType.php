<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('pseudo', TextType::class, ['attr' => ['placeholder' => 'Entrer votre pseudo']])
            ->add('email', EmailType::class, ['attr' => ['placeholder' => 'Entrer votre email']])
            ->add('password', PasswordType::class, ['attr' => ['placeholder' => 'Entrer votre mot de passe']])
            ->add('confirm_password', PasswordType::class, ['attr' => ['placeholder' => 'Confirmer votre mot de passe']])
            ->add('image', ImageType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
