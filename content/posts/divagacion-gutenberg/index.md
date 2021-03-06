---
title: "Divagación: Gutenberg"
date: "2019-04-29"
---

El cambio de editor por defecto de WordPress en diciembre del año pasado generó mucha controversia. Por parte de sus detractores, lo poco intuitivo de su interfaz gráfica, la falta de retro compatibilidad, la escasa documentación y lo inestable de su API fueron caballitos de batalla.

Sus simpatizantes se decantaron por las mejoras mobile-friendly, el dejar de almacenar el contenido de los posts en formato HTML, la posibilidad de abandonar los shortcodes en favor de bloques más amigables con el usuario y, en general, una experiencia de edición de contenido más similar a la de Medium.

Ambos puntos de vista tienen razones válidas y entiendo por qué generaron posiciones enconadas y extensas discusiones pero la discusión de Gutenberg soslayó otro montón de puntos conflictivos sobre el CMS que son más importantes. Igualmente, antes de entrar de lleno sobre este tema, voy a analizar los cambios que trae aparejado Gutenberg.

## Contenido como bloques

La principal diferencia entre el editor clásico y Gutenberg radica en como se conceptualiza el contenido. El anterior entendía cada post como un todo, el contenido era el conjunto de código HTML ingresado por el usuario a través de una interfaz más amigable, el editor.

Este enfoque presenta como ventaja que da mayor poder al usuario sobre el contenido y su presentación. Si el editor no soporta algo de forma nativa un copy paste de un código nos permite traer un tweet o video de YouTube a nuestro post.

Como contra podemos decir que da mayor poder al usuario sobre el contenido y su presentación y que permite hacer copy paste de un código extraño para incluir características no soportadas. La aplicación de parches para evitar el overflow de contenido e imágenes, limpiar el formato HTML de lo pegado del portapapeles y los hacks para adaptar el contenido embebido desde sitios de terceros son el ABC de cualquier theme que vayamos a distribuir.

Además, cualquier tipo de post procesamiento que querramos hacer sobre el contenido implica el parseo del código HTML en el mejor de los casos o el uso de expresiones regulares en el peor. El contenido propiamente dicho esta inevitablemente ligado a las etiquetas HTML.

Este tipo de vínculo estrecho no era un problema hace 16 años cuando WordPress salió a mundo. Los diseños web eran más sencillos, la interactividad esperada por el usuario era menor y la navegación estaba casi completamente abocada al escritorio.

Con todos los cambios tecnológicos y la ampliación de la variedad de plataformas donde nuestro contenido va a ser consumido que hubo durante la última década este enfoque comenzó a mostrar serias limitaciones. Si bien el contenido a presentar se mantiene, el formato y el layout del mismo cambian según desde dónde se consume.

La respuesta de Automattic a este problema es la introducción de los bloques de contenido. Cada parte del contenido: texto, imágenes, videos, étc, es ahora un bloque separado con atributos propios. Ya no es un todo indivisible sino que son unidades independientes.

Este enfoque permite separar en mayor medida el código HTML del contenido. El Rich Text proveído por TinyMCE se limita a los bloques de texto y las imágenes y demás embebidos pasan a recibir un tratamiento diferenciado. Se abstrae aún más el contenido de su presentación.

## React

Como todo este cambio afecta directamente al editor su implementación fue necesaria hacerla del lado del navegador donde JavaScript reina. Entre desarrollar desde 0 o utilizar uno de los frameworks existentes, los desarrolladores de WP se inclinaron por utilizar React.

Y aquí es donde se presenta uno de los puntos de fricción sobre Gutenberg, el desarrollo para WordPress siempre tuvo una barrera de acceso muy baja: con algunos conocimientos sobre HTML, CSS y PHP se podía armar un theme o plugin. A partir de ahora, es requisito tener un buen nivel de JavaScript y React para poder llevar adelante la implementación de algunas características.

Si bien esto aumenta la curva de aprendizaje necesaria para trabajar en un sitio con WordPress también amplia las capacidades del editor en varias magnitudes. Casi cualquier componente presentacional de React puede ser adaptado para ser usado en Gutenberg.

Siendo de uso diario muchas aplicaciones desarrolladas en React no creo que sea necesario explayarse en detalle sobre el potencial de esto.

## Shortcodes

Meta etiquetas que se procesan en el servidor cuando se solicita un post y que, a nivel editor, el usuario únicamente ve un fragmento de texto o una imagen sin relación directa con el contenido que se va a presentar. Además de romper con WYSIWYG los shortcodes presentaban otros problemas:

- El contenido mostrado en el post no es parte real del mismo por lo que se vuelve invisible al buscador de WordPress
- Al ser el shortcode indistinguible, en principio, del resto del contenido no hay forma sencilla de eliminarlo cuando, por ejemplo, se desinstala el plugin del que depende
- Como adenda al punto anterior, la identificación de los shortcodes en un post implica el parseo del contenido utilizando una regexp que [se las trae](https://core.trac.wordpress.org/browser/trunk/src/wp-includes/shortcodes.php#L242)
- En el caso de los shortcodes que no tienen una representación visual propia en el editor (como las galerías) existe la posibilidad de que el usuario los modifique inadvertidamente dejándolos no funcionales

Los bloques, por su implementación, suplen sobradamente todo el contenido servido a través de shortcodes sin ninguna de estas falencias y vuelven esta característica obsoleta.

## Meta fields

Una situación similar a la de los shortcodes se presenta con muchos de los meta campos que implementan themes y plugins: son contenido pero se manejan y almacenan por separado del demás contenido del post.

Aunque extremadamente útiles para poder agregar, de forma simple de usar de cara al usuario, opciones para personalizar en los posts la implementación por parte de WordPress no podía ser más engorrosa de implementar y costosa de usar por la gran cantidad de querys extras que necesita.

En este contexto surgió uno de los plugins más usados hoy en día al momento de extender la funcionalidad de los posts, ACF. El que durante años sería el referente indiscutido en el área se encontró con que en Gutenberg no se iban a mostrar más las meta boxes y meta fields quedándose así fuera del ruedo.

Con mucho acierto, el equipo detrás de ACF decidió adaptarse a los tiempos que corren y creó un generador propio de bloques que se integra perfectamente con Gutenberg.

Este cambio fue un alivio para todas las personas que tienen desarrollos que dependen fuertemente de dicho del plugin pero que sigue soslayando el tema principal: extender la funcionalidad de los posts es todavía un tema extremadamente engorroso aunque se esté yendo en la dirección correcta.

## UI/UX

Con respecto al tema de la interfaz del nuevo editor está claro que se orienta a dispositivos táctiles y no muy anchos, vamos que se han preocupado más del móvil que del escritorio.

En una pantalla ancha el recorrido que hay que hacer con el mouse desde el botón para agregar un bloque hasta la sidebar con los atributos del mismo se hace tedioso. Asimismo el alto grado de anidamiento de las distintas opciones tendiente a reducir la cantidad que se muestra en pantalla se puede presentar tedioso cuando vemos más del 50% de la misma en blanco y desaprovechado.

Nada que nos impida usar la interfaz pero que siendo tan sencillo de solucionar con una sidebar al estilo Elementor resulta inexcusable aún sabiendo que el editor se lanzó antes de estar terminado.

## REST API

Uno del puntos que menos sufrió cambios con el lanzamiento de la versión 5.0 de WordPress, que debería haberse tenido más en cuenta y que podría haberse aprovechado el cambio de editor para mejorar es la REST API. Uno de los puntos más problemáticos de la misma es lo fuertemente ligada que está al CMS. La clase controladora de los end points, WP\_REST\_Controller, es un bodoque monolítico que carga casi la misma cantidad de módulos de WordPress que cuando estamos mostrando el post de forma directa.

Otro punto es la gran cantidad de datos que envía como respuesta sin posibilidad más que de aplicarle unos pocos filtros. Conseguir desde nuestro frontend el url de la imagen destacada, el título y fecha de publicación implica traer también el resumen, todo el contenido, la fecha de modificación, el endpoint de los comentarios y un largo étc.

Sin llegar al punto de implementar GraphQL, que sería un objetivo a apuntar, podrían haberse hecho muchas mejoras a nivel filtrado de campos y separación de la REST API del resto del CMS.

## Documentación

La documentación de WordPress es algo que siempre te deja sin palabras y ni la nueva versión del CMS, ni el nuevo editor cambiaron eso. Una organización por demás enrevesada y ecléctica que sería el orgullo de Escher, no están todas las características documentadas y a veces la única información que hay es el código fuente sin ningún contexto. Y esas son sus puntos a favor.

Disclaimer: Este artículo no intenta tener ningún tipo de coherencia interna ni fin, como indica el título es una divagación. Los subtítulos fueron agregados a posteriori para cortar lo que es una pared de texto pero no van completamente acorde con lo que los sigue.
