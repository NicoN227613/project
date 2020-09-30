<?php

namespace App\Controller\Admin;

use App\Entity\ImageProduct;
use App\Service\ImageUrlGenerator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ImageController extends BaseController
{
    private $validator;
    private $imageUrlGenerator;
    private $manager;

    public function __construct(
        ValidatorInterface $validator,
        ImageUrlGenerator $imageUrlGenerator,
        EntityManagerInterface $manager)
    {
        $this->validator = $validator;
        $this->imageUrlGenerator = $imageUrlGenerator;
        $this->manager = $manager;
    }

    public function validateRequest(Request $request): array
    {
        $errors = $this->validator->validate($request->files->get('file'), [
            new Image()
        ]);
        if ($errors->count() === 0) {
            return [true, null];
        }
        return [false, new JsonResponse(['error' => $errors->get(0)->getMessage()], 422)];
    }
    /**
     * @Route("/image/{id<\d+>?}", name="image_show", methods={"POST"})
     */
    public function update(?ImageProduct $imageProduct, Request $request): JsonResponse
    {
        [$valid, $response] = $this->validateRequest($request);
        if (!$valid) {
            return $response;
        }
        if ($imageProduct === null) {
            $imageProduct = new ImageProduct();
        }
        $imageProduct->setImageFile($request->files->get('file'));
        $imageProduct->setUpdatedAt(new \DateTime());
        $this->manager->persist($imageProduct);
        $this->manager->flush();
        return new JsonResponse([
            'id' => $imageProduct->getId(),
            'url' => $this->imageUrlGenerator->generate($imageProduct)
        ]);
    }
}