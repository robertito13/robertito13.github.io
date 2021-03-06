---
title: "Crear un child theme en Wordpress"
date: "2018-06-01"
---

La creación de un child theme nos da la posibilidad de adaptar un theme pre existente a nuestro gusto. Cambiar algunas fuentes, espaciado, colores e incluso funciones de un theme que nos gusta para no tener que escribirlo de cero.

La principal ventaja de hacerlo a través de un child theme, en vez de modificar el theme original, radica en que cuando se actualice el theme original no perderemos nuestras modificaciones obteniendo así lo mejor de dos mundos, actualizaciones y personalización.

Como desventaja, agregamos una capa más que tiene que ser ejecutada sobre el theme original lo que podría, aunque no debería, hacer más lenta la carga del sitio. Además, dependiendo de la profundidad de las modificaciones, puede ocurrir que una actualización del theme original entre en conflicto con el child theme pero, nuevamente, es raro que ocurra.

El principio de funcionamiento de los child themes es que cualquier template que tengamos en nuestro theme, será ejecutado en vez del homónimo en el theme original. Es decir, si en nuestro child theme creamos un **comments.php**, este será ejecutado en vez del archivo incluido en el parent theme.

La única excepción a esto son los archivos **functions.php** que ámbos serán ejecutados, primero el del child theme y luego el del parent.

Para poder crear un child theme es necesario que el tema "padre" o parent esté instalado y tener acceso al directorio themes de tu sitio con permisos de escritura.

Los pasos serían:

1. Accede a la carpeta donde tienes alojado los themes.
2. Crea una nueva carpeta donde se alojará tu child-theme. Si no se te ocurre ningun nombre, una buena opción es _<nombre del theme original>-child_
3. Crea los archivos _functions.php_ y _style.css_
4. Agrega el contenido mínimo a cada archivo

/\*
 Theme Name:   <nombre de nuestro theme>
 Theme URI:    <url>
 Description:  <descripción>
 Author:       <autor>
 Author URI:   <url-autor>
 Template:     <nombre de la carpeta del theme padre>
 Version:      <versión de nuestro theme>
 License:      <licencia>
 License URI:  <url de la licencia>
 Text Domain:  <text domain>
\*/

El nombre del theme tiene que ser único, no puede ser el mismo del parent.

En template, va únicamente el nombre de la carpeta del theme para el que estamos creando el child.

Al momento de elegir licencia es importante tener en cuenta que sea compatible con la licencia del tema original.

Si no vamos a cambiar los strings del theme original, no hace falta especificar el text-domain.

<?php
add\_action( 'wp\_enqueue\_scripts', 'my\_theme\_enqueue\_styles' );
function my\_theme\_enqueue\_styles() {
    wp\_enqueue\_style( '<parent-theme>', get\_template\_directory\_uri() . '/style.css' );
 
    wp\_enqueue\_style( 'child-style',
        get\_stylesheet\_directory\_uri() . '/style.css',
        array( '<parent-theme>' ),
        wp\_get\_theme()->get('Version')
    );
}

En los child themes **get\_template\_directory\_uri()** nos devuelve el path al directorio del theme **original y get\_stylesheet\_directory\_uri()** nos devuelve el path al directorio del child theme.

¿Por qué cargamos el stylesheet del parent theme si ya lo hace este automáticamente? Porque los hooks, a menos que les indiquemos específicamente lo contrario, se ejecutan en el orden en que fueron cargados. Entonces, si no agregamos el stylesheet del parent theme en nuestro _functions.php_, este se va a cargar después del nuevo stylesheet haciendo que los cambios no se vean.

Es importante que hagamos el enqueue del parent theme con el mismo handle que en el theme original para evitar que se cargue dos veces. Si estuviéramos extendiendo o modificando el theme Divi, habría que reemplazar parent-theme por divi-style. Este dato lo podemos encontrar en el propio **functions.php** del parent theme.

Además, como se muestra en el ejemplo, es importante utilizar en el nombre de las funciones que creemos un prefijo único para evitar que colisionen con otras funciones del parent theme u otros plugins.

Una vez cargados los archivos, y las modificaciones del caso, el theme aparecerá junto a los demás en la sección Apariencia. Es importante recordar que no podemos eliminar el parent theme mientras esté activo el child.
