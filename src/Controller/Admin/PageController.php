<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class PageController extends BaseController
{
    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        return $this->redirectToRoute('admin_product_index');
        // return $this->render('admin/index.html.twig');
    }
}