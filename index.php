<?php

require $_SERVER['DOCUMENT_ROOT'] . '/local/vendor/autoload.php';

$obLoader = new Twig_Loader_Filesystem([
    $_SERVER['DOCUMENT_ROOT'] . '/local/templates/.default/layouts/',
]);

$obTwig = new Twig_Environment($obLoader, [
    'debug' => true,
]);

$obTwig->addExtension(new Twig_Extension_Debug());
$obTwig->addExtension(new \Core\Twig\CoreTwigExtension());

$layout = $_GET['layout'] ?: 'layout';

echo $obTwig->render($layout.'.twig');