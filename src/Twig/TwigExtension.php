<?php

namespace App\Twig;

use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;

class TwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('icon', [$this, 'svgIcon'], ['is_safe' => ['html']]),
        ];
    }

    public function svgIcon(string $name): string
    {
        return <<<HTML
        <svg class="icon">
          <use xlink:href="/sprite.svg#{$name}"></use>
        </svg>
        HTML;
    }
}