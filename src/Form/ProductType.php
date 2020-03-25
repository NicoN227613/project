<?php

namespace App\Form;

use App\Entity\Product;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('name', null, [
            'label' => 'Nom'
        ])
        ->add('category', null, [
            'label' => 'Catégorie'
        ])
        ->add('emplacement', null, [
            'label' => 'Emplacement'
        ])
        ->add('quantity', null, [
            'label' => 'Quantité'
        ])
        ->add('unity', null, [
            'label' => 'Unité'
        ])
        ->add('purchaseDate', DateType::class, [
            'html5' => true,
            'widget' => 'single_text',
            'label' => 'Acheté le'
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
