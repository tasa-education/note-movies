<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9cb6c41cd970112a5660073b00d79fdf
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Snow_Monkey\\Plugin\\Blocks\\' => 26,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Snow_Monkey\\Plugin\\Blocks\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9cb6c41cd970112a5660073b00d79fdf::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9cb6c41cd970112a5660073b00d79fdf::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
