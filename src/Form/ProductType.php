<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Unity;
use App\Entity\Product;
use App\Entity\Category;
use App\Entity\Emplacement;
use App\Form\Type\DateType;
use App\Form\Type\UserChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('author', UserChoiceType::class)
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
        ->add('purchaseDate', DateType::class)
        ->add('expirationDate', DateType::class)
        ->add('bestBeforeDate', DateType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
