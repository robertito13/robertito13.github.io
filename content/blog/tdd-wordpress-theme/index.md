---
title: "TDD Wordpress Theme"
date: "2018-12-02"
tags: ["wordpress"]
---

Tanto al comenzar a desarrollar un tema desde cero como cuando ya adquirió mayor complejidad tenemos que hacer una serie de chequeos de forma manual para asegurarnos que no nos olvidamos de incluir ninguna funcionalidad o no quedó código muerto.

Obviamente una buena checklist y una organización bien planificada de nuestro código simplifica mucho el tema pero siempre es menester automatizar este tipo de tareas.

Wordpress provee una Test Suit pero está orientada principalmente al testeo del funcionamiento de Wordpress más que a las cuestiones atinentes al desarrollo de themes.

Si bien puede ser utilizada como base para testear nuestros temas, a mi entender, agrega demasiado overhead para lo que nos aporta. Partiendo de este presupuesto decidí comenzar a desarrollar algunos tests propios con PHPUnit.

Primeramente, basado en el checklist que antes mencioné, definí una serie de chequeos que me interesa automatizar:

- Existe los archivos functions.php, style.css y el screenshot
- No hay archivos sin usar
- Existe el template correspondiente a los template tags usados. Por ej.: get\_header y header.php
- Todas las uris locales son relativas
- Todos los scripts/styles registrados son usados y existen
- Hay sidebars y todas son usadas en algún lado
- Todos los espacios de menu son usados en algún momento
- Las páginas/artículos y el sitio tienen metadatos
- El favicon está definido y la ruta existe
- El theme no tiene que tomar funciones de plugin:
    - Dashboard widgets
    - Custom Post Types
    - Custom Taxonomies
    - Shortcodes
    - Metaboxes
    - Social integrations
    - Bloques de Gutenberg
- La paginación respeta la configuración de Ajustes > Lectura
- Customizer sanitization
- Scripts/styles externos cargados de [forma agnóstica](https://core.trac.wordpress.org/ticket/16560)
- [No se usa @import en los stylesheet](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)
- Soporte para title tag
- [Uso de $content\_width](https://developer.wordpress.com/themes/content-width/)
- CSS básicos definidos:
    - alignleft, aligncenter, alignright,
    - wp-caption,
    - size-full, size-large, size-medium, size-thumbnail
- Uso de [WP\_Filesystem en vez de las PHP File Functions](https://www.webdesignerdepot.com/2012/08/wordpress-filesystem-api-the-right-way-to-operate-with-local-files/): mkdir, fopen, fread, fwrite, fputs
- Sin estilos o scripts hardcodeados
- Scripts cargados únicamente en footer
- i18n

A primera vista, algunos son sencillos como la verificación de la existencia de archivos, otros van a requerir análisis del código y algunos que podrían ser verificados utilizando la API que trae WordPress contra un servidor de desarrollo o staging.

Por ahora voy a ir haciendo el desarrollo y pruebas contra la copia de desarrollo del theme de un sitio que está en producción para tener un objetivo más real aunque la idea sería, a largo plazo, constituir un repositorio agnóstico que pueda ser rápidamente clonado en nuestro proyecto.

La primera aproximación quedaría con la siguiente estructura dentro de [mi workflow habitual](https://rvaccaro.com.ar/2018/06/workflow-en-wordpress/):

- tests/bootstrap.php
- tests/FaviconTest.php
- tests/MissingFilesTest.php
- tests/StylesheetTest.php
- composer.json
- phpunit.xml

Y el código propiamente de cada archivo sería:

<script src="https://gist.github.com/robertito13/fd2ca8d31b0ded3fe77f5a1fff70dc7b.js"></script>

Próximamente estaré publicando más novedades.
