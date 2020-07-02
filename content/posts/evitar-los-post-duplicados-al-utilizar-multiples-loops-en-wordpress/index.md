---
title: "Evitar los post duplicados al utilizar múltiples loops en WordPress"
date: "2018-04-20"
---

Durante el desarrollo de un theme de WordPress es habitual que lleguemos a una instancia en la que el loop por defecto se queda corto y necesitamos implementar nuevas querys para poder mostrar la información de la forma deseada.

Al ser independientes las distintas querys entre sí puede ocurrir que traigan más de una vez el mismo post a colación provocando que se vean repetidos en nuestro sitio. Para poder tener mayor control sobre qué post se incluyen en los resultados del query _WP\_Query_ pone a nuestra disposición la opción _[post\_\_not\_in](https://developer.wordpress.org/reference/classes/wp_query/#post-page-parameters)_ que nos permite especificar los ID de los post que queremos dejar fuera del loop.

Ahora el problema que nos surge es cómo llevar el control de los posts mostrados en las distintas partes del template. Para este fin existen distintos enfoques, por ejemplo, tener una variable global en donde vayamos almacenando los distintos posts que se ya se hayan mostrado.

En mi caso, utilizo una sencilla clase que incluyo en el _functions.php_ y que utiliza una variable y un par de funciones estáticas para llevar el control de los post ya mostrados:

<script src="https://gist.github.com/robertito13/3d722251cecad361ed76bd4065bc1b85.js"></script>

Como se puede observar alcanza con llamar a _WP\_Deduplicator::add()_ después de haber cargado los datos del post o pasandole directamente el ID a excluir y luego, al hacer nuestro próximo query pasar a la opción _post\_\_not\_in_ el retorno de _WP\_Deduplicator::get()_.
