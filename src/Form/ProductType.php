<?php

namespace App\Form;

use App\Entity\Unity;
use App\Entity\Product;
use App\Entity\Category;
use App\Entity\Emplacement;
use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('author', EntityType::class, [
            'class' => User::class,
            'choice_label' => 'email',
        ])
        ->add('name', TextType::class)
        ->add('classifiedIn', EntityType::class, [
            'class' => Category::class,
            'choice_label' => 'name',
            'multiple' => false,
            'label' => 'Catégorie',
            'required' => false,
        ])
        ->add('placeIn', EntityType::class, [
            'class' => Emplacement::class,
            'choice_label' => 'name',
            'multiple' => false,
            'label' => 'Emplacement',
            'required' => false,
        ])
        ->add('quantity', IntegerType::class, [
            'label' => 'Quantité',
            'attr' => [
                'min' => 0,
            ]
        ])
        ->add('units', EntityType::class, [
            'class' => Unity::class,
            'choice_label' => 'name',
            'multiple' => false,
            'label' => 'Unité',
            'required' => false,
        ])
        ->add('purchaseDate', DateType::class, [
            'html5' => true,
            'widget' => 'single_text',
            'label' => 'Acheté le',
            'attr' => [
                'max' => date('Y-m-d'),
            ]
        ])
        ->add('expirationDate', DateType::class, [
            'html5' => true,
            'widget' => 'single_text',
            'label' => 'A consommer avant le'
        ])
        ->add('bestBeforeDate', DateType::class, [
            'html5' => true,
            'widget' => 'single_text',
            'label' => 'A consommer de préférence avant le'
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
