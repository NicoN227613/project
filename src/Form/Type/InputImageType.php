<?php

namespace App\Form\Type;

use App\Entity\ImageProduct;
use App\Service\ImageUrlGenerator;
use App\Validator\ImageProductExist;
use App\Validator\NotExistImageProduct;
use Symfony\Component\Form\FormView;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class InputImageType extends TextType implements DataTransformerInterface
{
    private $manager;
    private $imageUrlGenerator;

    public function __construct(EntityManagerInterface $manager, ImageUrlGenerator $imageUrlGenerator)
    {
        $this->manager = $manager;
        $this->imageUrlGenerator = $imageUrlGenerator;
    }

    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['attr'][
            'data-image'] = $this->imageUrlGenerator->generate($form->getData());
        parent::buildView($view, $form, $options);
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addViewTransformer($this);
        parent::buildForm($builder, $options);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'attr' => [
                'is' => 'input-image'
            ],
            'constraints' => [
                new ImageProductExist()
            ]
        ]);
        parent::configureOptions($resolver);
    }

    /**
     * @param ?ImageProduct $imageProduct
     */
    public function transform($imageProduct): ?int
    {
        if($imageProduct instanceof ImageProduct) {
            return $imageProduct->getId();  
        }
        return null;
    }

    /**
     * @param int $value
     */
    public function reverseTransform($value): ?ImageProduct
    {
        if(empty($value)) {
            return null;
        }
        return $this->manager->getRepository(ImageProduct::class)->find($value) ?: new NotExistImageProduct($value);
    }
}
