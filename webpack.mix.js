const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

// mix.styles([
//     'dashboard/plugins/fontawesome-free/css/all.min.css',
//     'dashboard/dist/css/adminlte.min.css'],'public/css').
//     scripts(['dashboard/plugins/jquery/jquery.min.js',
//     'dashboard/plugins/bootstrap/js/bootstrap.bundle.min.js',
//     'dashboard/dist/js/adminlte.min.js'],'public/js');

mix.styles(['public/dashboard/plugins/fontawesome-free/css/all.css',
'public/dashboard/plugins/fontawesome-free/css/fontawesome.css',
'public/dashboard/dist/css/adminlte.css'],'public/css/app.css').
scripts(['public/dashboard/plugins/jquery/jquery.js',
    'public/dashboard/plugins/bootstrap/js/bootstrap.bundle.js',
    'public/dashboard/dist/js/adminlte.js'],'public/js/app.js');
