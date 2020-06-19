<?php

namespace App\Mailing;

use Symfony\Component\Mime\Email;
use Twig\Environment;

final class EmailFactory
{
    /** @var Environment $twig */
    private $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * @param array<string,mixed> $data
     */
    public function makeFromTemplate(string $template, array $data = []): Email
    {
        return (new Email())
        ->html($this->twig->render($template, $data));
    }
}