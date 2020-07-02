---
title: "Workflow en WordPress"
date: "2018-06-28"
---

La estructura de directorios que uso en mi workflow se aprovecha de una feature de WordPress que permite distribuir grupos de themes. La idea es que en vez de almacenar un theme por directorio se puedan poner varios usando subdirectorios.

El funcionamiento de esta feature es bastante sencillo, cuando WP lista las carpetas en _wp-content/themes_ para ver que themes hay instalados, revisa si en la raíz  de las mismas está el archivo _style.css_; si no lo encuentra busca en los subdirectorios de primer nivel de la misma por si es un grupo de themes.

La idea entonces es que en nuestro entorno de desarrollo ese subdirectorio, que WP va a identificar como el que contiene el theme, sea el de las builds y que cualquier otro subdirectorio de primer nivel no tenga un archivo _style.css_.

- build
- dist/theme
- src
    - images
    - languages
    - scripts
        - admin
        - customize
        - modules
    - styles
    - templates
        - admin
        - customize
        - modules
    - vendor
- tasks

#### Build y Dist

Como se deduce de sus nombre, build, contiene las builds con todo el código sin comprimir y preparado para debug mientras que en dist se guarda el theme listo para producción.

Para evitar confundir a WP, es importante que en la raiz del directorio dist no se encuentre el style.css sino en un subdirectorio de este. Esto, además, nos simplifica el proceso de crear el zip / tar.gz para distribuir porque ya nos queda todo en un directorio listo para comprimir.

#### Src

Los "fuentes" del theme en el que estamos trabajando: php, imágenes y scss sin procesar, archivos de traducción, étc. Casi todo lo que está en este directorio va a ser procesado, optimizado, comprimido y demás operaciones que van a dar como resultado nuestro theme.

La idea original del directorio images era, justamente, guardar imágenes que se usaran en el diseño del theme pero, hoy en día, con los avances de CSS únicamente almacena el screenshot.

La carpeta templates contiene todo el código php, el ordenamiento interno tiene que cumplir con las limitaciones y recomendaciones de cualquier theme.

Me gusta mucho trabajar con el customizer así que suelo generar bastante código para este y, por lo tanto, tanto en la carpeta de scripts como de templates lo guardo en un directorio separado.

Además, a lo largo del tiempo, he creado algunos snipets de código que utilizo tan habitualmente como preload y lazyload, google fonts, étc que los mantego de forma separada y que cuando los incluyo en un proyecto los guardo en la carpeta modules.

Por una cuestión de separación también guardo en otro directorio, _admin_, todo el código que está pensado únicamente para ejecutarse en el dashboard de WP.

Por último, como no siempre hay paquetes con la librería que necesito, la versión que busco o no quiero usar un CDN, o por lo que sea, tengo el directorio _vendor_ que se copia íntegramente tanto a las build como a la dist.

#### Tasks

Las tasks de Gulp.js: _build_, _clean_, _clean-vendor_, _images_, _scripts_, _styles_, _templates_, _translation_, _vendor_, _watch_.

Mantengo separadas las partes de código propio del código de _vendor_: _build_ y _clean_ para uno y _vendor_ y _clean-vendor_ para el otro. Ídem con las traducciones: _translation_.

Normalmente, _build_ se encarga tanto de generar tanto la versión de pruebas como la versión para distribución. Antes las generaba con tareas específicas pero siempre se terminaban dando dos escenarios: dos tareas muy parecidas que había que mantener sincronizadas manualmente o una tarea con un montón de código duplicado y un enredo de condicionales.

La más importante de las tareas es _watch_ que monitorea los cambios y actualiza la build. Para esto utilizo el modulo que trae Gulp por defecto en conjunto con BrowserSync para la inyección del nuevo CSS pero sin actualización automática. Pero, cuando trabajo sobre el customizer, desactivo completamente BS porque no se llevan bien y se suele quedar con pantallas en blanco u errores.

#### Gists

[WP\_Deduplicator](https://gist.github.com/robertito13/3d722251cecad361ed76bd4065bc1b85): Clase estática que permite llevar el control de los post mostrados para evitar duplicar el contenido.

[WP\_Keepalive](https://gist.github.com/robertito13/192d28ccd2e845b62f1230388d9de63a): Función que agrega o modifica la cabecera Connection para informar al cliente que es posible reutilizar la conexión abierta ahorrándonos establecer una conexión nueva para cada archivo.

[WP\_Clipboard](https://gist.github.com/robertito13/c6e32531b70e92116d064bd20e384f69): Función que usa una lista blanca para filtrar las etiquetas HTML del texto que se pega en el editor.
