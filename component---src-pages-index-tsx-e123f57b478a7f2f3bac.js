(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+5i3":function(e,a,t){},"4Ue/":function(e,a,t){e.exports={externalLink:"external-link-module--external-link--DBnO0"}},OGtf:function(e,a,t){var r=t("XKFU"),s=t("eeVq"),o=t("vhPU"),n=/"/g,i=function(e,a,t,r){var s=String(o(e)),i="<"+a;return""!==t&&(i+=" "+t+'="'+String(r).replace(n,"&quot;")+'"'),i+">"+s+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(i),r(r.P+r.F*s((function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",t)}},QeBL:function(e,a,t){"use strict";t.r(a);t("KKXr");var r=t("qLvF"),s=t("q1tI"),o=t.n(s),n=t("x8nm"),i=(t("tUrg"),t("Wbzz")),l=t("IP2g"),d=t("wHSu"),c=t("4Ue/"),u=t.n(c);var p=function(e){var a,t;function r(){return e.apply(this,arguments)||this}return t=e,(a=r).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,r.prototype.render=function(){return o.a.createElement("div",{className:u.a.externalLink},o.a.createElement("a",{href:this.props.to},this.props.children),o.a.createElement(l.a,{icon:d.b}))},r}(o.a.Component),f=t("k3lz"),m=t.n(f),g=function(e){var a=e.posts;return o.a.createElement("div",{className:m.a.content},a.map((function(e){var a=e.node,t=(a.frontmatter.tags||[]).map((function(e){return o.a.createElement("div",{className:m.a.tag,key:e},e)}));return o.a.createElement("article",{key:a.id,className:m.a.article},o.a.createElement("div",{className:m.a.date},"[ ",o.a.createElement("time",{dateTime:a.frontmatter.rawDate},a.frontmatter.date)," ]"),"links"===a.fields.source?o.a.createElement(p,{to:a.frontmatter.link},a.frontmatter.title):o.a.createElement(i.a,{to:a.fields.slug},a.frontmatter.title),t||"")})))},b=t("H8eV");t("+5i3"),a.default=function(){var e=r.data.allMarkdownRemark.edges||[],a=Object(s.useState)({filteredPosts:[],query:""}),t=a[0],i=a[1],l=t.filteredPosts,d=t.query,c=l&&""!==d?l:e;return o.a.createElement("div",{className:"container"},o.a.createElement(b.a,{title:"Inicio"}),o.a.createElement(n.a,{filterFn:function(a){var t=a.split("="),r=e.filter((function(e){return"type"===t[0]&&e.node.fields.source===t[1]}));i({filteredPosts:r,query:a})}}),o.a.createElement(g,{posts:c}))}},qLvF:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"/jwt-the-right-way/","source":"posts"},"excerpt":"Introducción JWT es un formato estandarizado para representar claims, información sobre identidad o privilegios, con el objetivo de…","frontmatter":{"date":"03-07-2020","rawDate":"2020-07-03","title":"JWT: The right way","link":null,"tags":null},"id":"8de82cd3-818e-5527-9060-21f629be3d39"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"30-06-2020","rawDate":"2020-06-30","title":"How to Add Search Functionality to a Gatsby Blog","link":"https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial","tags":null},"id":"22de59c4-f432-53e3-b0ad-344503b79d68"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"26-06-2020","rawDate":"2020-06-26","title":"Visual Studio Code tips and tricks","link":"https://channel9.msdn.com/Events/Build/2020/BOD103?ocid=AID3012654&WT.mc_id=build2020-azuredevtips-micrum","tags":null},"id":"2cf54b99-b962-51fb-9bea-2b3a614fe3f1"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"23-06-2020","rawDate":"2020-06-23","title":"Detect PHP security vulnerabilities with Psalm","link":"https://psalm.dev/articles/detect-security-vulnerabilities-with-psalm","tags":null},"id":"4464c60e-2a81-5283-b7c2-79150321b1dc"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"16-06-2020","rawDate":"2020-06-16","title":"How to Code Right in Your Browser with Your Own Cloud Dev Environment","link":"https://www.freecodecamp.org/news/learn-programming-in-your-browser-the-right-way/","tags":null},"id":"acdd811a-ad34-560f-b832-4f7c71488c36"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"10-06-2020","rawDate":"2020-06-10","title":"Using \\"window\\" the React Way with react-fns","link":"https://alligator.io/react/declarative-html5-apis-react-fns/","tags":null},"id":"9c97a0b0-e0c0-5dc2-a1fe-be12504f40dc"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"10-06-2020","rawDate":"2020-06-10","title":"What the Heck is Backstage Anyway?","link":"https://engineering.atspotify.com/2020/03/17/what-the-heck-is-backstage-anyway/","tags":null},"id":"02750e84-4cf9-5d6f-b9fb-56119de152f6"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"19-05-2020","rawDate":"2020-05-19","title":"How HTTP Requests Work","link":"https://christine.website/blog/how-http-requests-work-2020-05-19","tags":null},"id":"6dfce683-b683-57b5-8e6d-9c190117842e"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"19-05-2020","rawDate":"2020-05-19","title":"The case of the missing DNS packets: a Google Cloud support story","link":"https://cloud.google.com/blog/topics/inside-google-cloud/google-cloud-support-engineer-solves-a-tough-dns-case","tags":null},"id":"3633364c-4bf7-504b-a4b5-48be229654a3"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"19-05-2020","rawDate":"2020-05-19","title":"The Hardest Program I\'ve Ever Written","link":"https://journal.stuffwithstuff.com/2015/09/08/the-hardest-program-ive-ever-written/","tags":null},"id":"93b534e7-8db2-5a45-8fc6-425dc31b3810"}},{"node":{"fields":{"slug":"/wordpress-cs-en-vscode/","source":"posts"},"excerpt":"WordPress tiene recomendaciones sobre cómo se debe escribir el código tanto si es para el core como para plugins y themes e incluso para la…","frontmatter":{"date":"30-05-2019","rawDate":"2019-05-30","title":"WordPress CS en VSCode","link":null,"tags":null},"id":"5c10fea9-a923-516c-a406-1462fdc32bec"}},{"node":{"fields":{"slug":"/quitar-etiquetas-p-de-las-imagenes-en-wordpress/","source":"posts"},"excerpt":"","frontmatter":{"date":"29-05-2019","rawDate":"2019-05-29","title":"Quitar etiquetas p de las imágenes en WordPress","link":null,"tags":null},"id":"ddb4382e-4bfc-5f9a-8b5d-6052b15f22b3"}},{"node":{"fields":{"slug":"/docker-compose-env/","source":"posts"},"excerpt":"Compose nos permite una gran personalización mediante el archivo de configuración pero hay algunas cosas que no están soportadas dentro del…","frontmatter":{"date":"11-05-2019","rawDate":"2019-05-11","title":"Docker Compose: .env","link":null,"tags":null},"id":"1d6a954f-a396-55d5-8528-9ca2e8978a03"}},{"node":{"fields":{"slug":"/docker-wordpress/","source":"posts"},"excerpt":"Siguiendo con el tema de Docker, uno de mis usos preferidos es utilizarlo para crear entornos locales para testear WordPress. Si bien hay…","frontmatter":{"date":"05-05-2019","rawDate":"2019-05-05","title":"Docker: Wordpress","link":null,"tags":null},"id":"ec3c4afb-1864-5ce5-b793-aa55b1e97bd8"}},{"node":{"fields":{"slug":"/docker/","source":"posts"},"excerpt":"Hace unos meses como consecuencia de haber tenido que cambiar de discos en mi PC me encontré con la necesidad de volver a montar un entorno…","frontmatter":{"date":"03-05-2019","rawDate":"2019-05-03","title":"Docker","link":null,"tags":null},"id":"5f76e5fb-8da1-5922-b1fd-01cb33aa5aaa"}},{"node":{"fields":{"slug":"/divagacion-gutenberg/","source":"posts"},"excerpt":"El cambio de editor por defecto de WordPress en diciembre del año pasado generó mucha controversia. Por parte de sus detractores, lo poco…","frontmatter":{"date":"29-04-2019","rawDate":"2019-04-29","title":"Divagación: Gutenberg","link":null,"tags":null},"id":"c1341a8e-226a-5ef3-a8a2-576c3bb94111"}},{"node":{"fields":{"slug":"/the-problem-with-time-timezones-computerphile/","source":"posts"},"excerpt":"https://www.youtube.com/watch?v=-5wpm-gesOY","frontmatter":{"date":"18-01-2019","rawDate":"2019-01-18","title":"The Problem with Time & Timezones - Computerphile","link":null,"tags":null},"id":"dccfb8d3-6ab6-533d-9718-870cb32f36d3"}},{"node":{"fields":{"slug":"/tdd-wordpress-theme/","source":"posts"},"excerpt":"Tanto al comenzar a desarrollar un tema desde cero como cuando ya adquirió mayor complejidad tenemos que hacer una serie de chequeos de…","frontmatter":{"date":"02-12-2018","rawDate":"2018-12-02","title":"TDD Wordpress Theme","link":null,"tags":["wordpress"]},"id":"3bcf209f-87c7-5fdf-8911-3a9016f901d1"}},{"node":{"fields":{"slug":"/wordpress-customizer-js-api/","source":"posts"},"excerpt":"A partir de la versión 4.1 de Wordpress implementó una API en Javascript que permite la creación y el control de todos los elementos del…","frontmatter":{"date":"21-10-2018","rawDate":"2018-10-21","title":"Wordpress Customizer JS API","link":null,"tags":null},"id":"89979751-bda5-5585-ae1b-05e60765746d"}},{"node":{"fields":{"slug":"/arquitectura-de-un-sitio-web/","source":"posts"},"excerpt":"La arquitectura de un sitio web o aplicación web es la descripción de la configuración, función y relación de los distintos componentes que…","frontmatter":{"date":"17-09-2018","rawDate":"2018-09-17","title":"Arquitectura de un sitio web","link":null,"tags":null},"id":"3b5fe791-162d-561e-8ba0-d15d5875e1d3"}},{"node":{"fields":{"slug":"/notificaciones-desde-wsl/","source":"posts"},"excerpt":"Con todos los avances que ha tenido el Windows Subsystem fro Linux, una de las funcionalidades que todavía sigue pendiente de implementar es…","frontmatter":{"date":"31-08-2018","rawDate":"2018-08-31","title":"Notificaciones de Windows en WSL","link":null,"tags":null},"id":"ca72ebb9-894a-5cac-8a29-9c5c2b819e95"}},{"node":{"fields":{"slug":"/recursos-utiles-para-el-desarrollo-web/","source":"posts"},"excerpt":"Serie de herramientas y bibliotecas online que son útiles durante el proceso de desarrollo web. Google Analytics Podemos usar otro pero…","frontmatter":{"date":"22-08-2018","rawDate":"2018-08-22","title":"Recursos útiles para el desarrollo web","link":null,"tags":null},"id":"aae1b880-3487-5716-ba5d-bca537761da4"}},{"node":{"fields":{"slug":"/wordpress-y-phpunit/","source":"posts"},"excerpt":"PHPUnit es uno de los frameworks para test unitarios automáticos para PHP más usados y el elegido por los desarrolladores de Wordpress junto…","frontmatter":{"date":"15-08-2018","rawDate":"2018-08-15","title":"Wordpress y PHPUnit","link":null,"tags":null},"id":"3279ac77-5497-55fa-a393-b0c770b81171"}},{"node":{"fields":{"slug":"/patron-de-inyeccion-de-dependencias/","source":"posts"},"excerpt":"La idea detrás del patrón de inyección de dependencias es lograr una mayor separación de las responsabilidades de nuestro código cambiando…","frontmatter":{"date":"10-08-2018","rawDate":"2018-08-10","title":"Patrón de Inyección de Dependencias","link":null,"tags":null},"id":"3c8f77c5-e7d2-5d3d-89d0-122563b6ff35"}},{"node":{"fields":{"slug":"/patron-de-carga-diferida-value-holder/","source":"posts"},"excerpt":"El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las…","frontmatter":{"date":"08-08-2018","rawDate":"2018-08-08","title":"Patrón de Carga Diferida: Value Holder","link":null,"tags":null},"id":"4f9d9374-90c0-5e4b-9248-8ea54706759e"}},{"node":{"fields":{"slug":"/patron-de-carga-diferida-fantasma/","source":"posts"},"excerpt":"El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las…","frontmatter":{"date":"12-07-2018","rawDate":"2018-07-12","title":"Patrón de Carga Diferida: Fantasma","link":null,"tags":null},"id":"0a6d9321-0f52-5c59-b18d-e4dc94889229"}},{"node":{"fields":{"slug":"/patron-de-carga-diferida-proxy-virtual/","source":"posts"},"excerpt":"El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las…","frontmatter":{"date":"11-07-2018","rawDate":"2018-07-11","title":"Patrón de Carga Diferida: Proxy Virtual","link":null,"tags":null},"id":"70cb7324-9758-50e6-a324-8fe2dbc94ffd"}},{"node":{"fields":{"slug":"/insertar-o-actualizar-en-mysql/","source":"posts"},"excerpt":"Al momento de agregar una nueva fila a una tabla en MySQL nos podemos encontrar que nos devuelve el error 1062: Duplicate entry  for key…","frontmatter":{"date":"05-07-2018","rawDate":"2018-07-05","title":"Insertar o actualizar en MySQL","link":null,"tags":null},"id":"5870464d-0c0c-52c3-b04d-22982e8fd03c"}},{"node":{"fields":{"slug":"/workflow-en-wordpress/","source":"posts"},"excerpt":"La estructura de directorios que uso en mi workflow se aprovecha de una feature de WordPress que permite distribuir grupos de themes. La…","frontmatter":{"date":"28-06-2018","rawDate":"2018-06-28","title":"Workflow en WordPress","link":null,"tags":null},"id":"bdb272e6-4861-565a-a7a1-bb82d0a4f023"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"27-06-2018","rawDate":"2018-06-27","title":"Entendiendo Frontend hoy","link":"https://belcurcio.com/blog/entendiendo-frontend-hoy","tags":null},"id":"996a4c83-c9f9-5622-9750-68f62f6ccb11"}},{"node":{"fields":{"slug":"/crear-un-child-theme-en-wordpress/","source":"posts"},"excerpt":"La creación de un child theme nos da la posibilidad de adaptar un theme pre existente a nuestro gusto. Cambiar algunas fuentes, espaciado…","frontmatter":{"date":"01-06-2018","rawDate":"2018-06-01","title":"Crear un child theme en Wordpress","link":null,"tags":null},"id":"72078232-cd83-5547-b377-9410e6da0cb5"}},{"node":{"fields":{"slug":"/errores-comunes-cuando-empezamos-a-utilizar-react/","source":"posts"},"excerpt":"Olvidar la clave de los elementos al usar map Si bien no es un error, por eso únicamente genera una advertencia, el uso de keys (claves) es…","frontmatter":{"date":"28-05-2018","rawDate":"2018-05-28","title":"Errores comunes cuando empezamos a utilizar React","link":null,"tags":null},"id":"9ebda2c4-9274-544d-8388-34b978bbbd89"}},{"node":{"fields":{"slug":"/cuando-no-usar-modulos-o-librerias-externas-en-javascript/","source":"posts"},"excerpt":"Cuándo no sabemos cómo programar la funcionalidad Los módulos o librerías tienen que simplificar el proceso de desarrollo, no reemplazarlo…","frontmatter":{"date":"22-05-2018","rawDate":"2018-05-22","title":"Cuándo (no) usar módulos o librerías externas en JavaScript","link":null,"tags":null},"id":"5d88e489-36f6-5ed1-8f9a-a5bb623ce8a5"}},{"node":{"fields":{"slug":"/patron-de-carga-diferida-inicializacion-diferida/","source":"posts"},"excerpt":"El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las…","frontmatter":{"date":"17-05-2018","rawDate":"2018-05-17","title":"Patrón de Carga Diferida: Inicialización diferida","link":null,"tags":null},"id":"5190cb6b-1570-52df-9730-41ae336a57f5"}},{"node":{"fields":{"slug":"/propiedades-no-enumerables-en-javascript/","source":"posts"},"excerpt":"Hasta la especificación ES5 de JavaScript las propiedades de un objeto consistían únicamente de un nombre y un valor. A partir de 200…","frontmatter":{"date":"09-05-2018","rawDate":"2018-05-09","title":"Propiedades no enumerables en JavaScript","link":null,"tags":null},"id":"d5645853-4435-5788-9eda-182ffc4aba2e"}},{"node":{"fields":{"slug":"/limitaciones-y-diferencias-de-object-assign-y-el-operador-de-propagacion-en-javascript/","source":"posts"},"excerpt":"Con el (nuevo) auge de la programación funcional y de librerías como Redux ha resurgido el concepto de inmutabilidad. La existencia de…","frontmatter":{"date":"05-05-2018","rawDate":"2018-05-05","title":"Limitaciones y diferencias de Object.assign() y el operador de propagación en JavaScript","link":null,"tags":null},"id":"9cc40b05-1095-5831-ba55-dfc52ce49ad8"}},{"node":{"fields":{"slug":"/parsear-uri-con-javascript/","source":"posts"},"excerpt":"","frontmatter":{"date":"27-04-2018","rawDate":"2018-04-27","title":"Parsear URI con Javascript","link":null,"tags":null},"id":"a0ab0a14-afe2-53db-8a6a-ed36f35511b0"}},{"node":{"fields":{"slug":"/evitar-los-post-duplicados-al-utilizar-multiples-loops-en-wordpress/","source":"posts"},"excerpt":"Durante el desarrollo de un theme de WordPress es habitual que lleguemos a una instancia en la que el loop por defecto se queda corto y…","frontmatter":{"date":"20-04-2018","rawDate":"2018-04-20","title":"Evitar los post duplicados al utilizar múltiples loops en WordPress","link":null,"tags":null},"id":"94d56e5b-233c-5399-b0bf-c5d22753bb2b"}},{"node":{"fields":{"slug":"/rendimiento-de-wsl/","source":"posts"},"excerpt":"Una de las grandes features que trajo la Anniversary Update de Windows 10 es el Windows Subsystem for Linux (WSL), una compatibility layer…","frontmatter":{"date":"13-04-2018","rawDate":"2018-04-13","title":"Rendimiento de WSL","link":null,"tags":null},"id":"18430628-335d-5f71-ae14-6b41e27e4708"}},{"node":{"fields":{"slug":"/solucionar-errores-de-renovacion-de-certificados-lets-encrypt-en-virtualmin/","source":"posts"},"excerpt":"Para los que administramos nuestros servidores con Virtualmin y probamos desde que apareció la gestión de certificados SSL con Let\'s Encrypt…","frontmatter":{"date":"15-07-2016","rawDate":"2016-07-15","title":"Solucionar errores de renovación de certificados Let\'s Encrypt en Virtualmin","link":null,"tags":null},"id":"01c34f25-2e12-51b7-bf6e-2c57ef2ed8e8"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"11-06-2016","rawDate":"2016-06-11","title":"Expresiones regulares, de novato a maestro en un sólo artículo","link":"http://jarroba.com/busqueda-de-patrones-expresiones-regulares/","tags":null},"id":"a997e55f-f8fb-58a1-be2d-0bdf546c03a2"}},{"node":{"fields":{"slug":"/windows-atom/","source":"posts"},"excerpt":"La solución a uno de los problemas más molestos de usar Atom en Windows: no poder asociar las extensiones de archivos al editor para…","frontmatter":{"date":"24-02-2016","rawDate":"2016-02-24","title":"Windows + Atom","link":null,"tags":null},"id":"3c3c6e98-e8e0-53c6-9363-756470414962"}},{"node":{"fields":{"slug":"/mapear-una-conexion-sftp-a-una-unidad-en-windows/","source":"posts"},"excerpt":"El acceso mediante SSH al servidor es más seguro, rápido y potente. Nos permite trabajar  como si estuviéramos delante del equipo. SFTP no…","frontmatter":{"date":"12-01-2016","rawDate":"2016-01-12","title":"Mapear una conexión SFTP a una unidad en Windows","link":null,"tags":null},"id":"9151d08a-1771-5d08-adcd-a561281f1459"}},{"node":{"fields":{"slug":"/usar-repositorios-git-como-paquetes-de-composer/","source":"posts"},"excerpt":"No todos los proyectos de GitHub están registrados en packagist.com o tienen creado un \\"composer.json\\" que nos permita agregarlo de forma…","frontmatter":{"date":"04-12-2015","rawDate":"2015-12-04","title":"Usar repositorios Git como paquetes de Composer","link":null,"tags":null},"id":"58691162-4b40-5462-9ce9-2f4fa5d0cabf"}},{"node":{"fields":{"slug":"/usar-gitputty-para-conectarse-a-repositorios-en-windows/","source":"posts"},"excerpt":"Instalar GIT para Windows - Descarga Instalar PuTTY - Descarga  Utilizar PuTTYgen para crear un par de claves Abrir PuTTYgen, cambiar la…","frontmatter":{"date":"01-12-2015","rawDate":"2015-12-01","title":"Usar Git+PuTTY para conectarse a repositorios en Windows","link":null,"tags":null},"id":"445bd819-c4fc-5c57-92d1-ee972349dc92"}}]}}}')},tUrg:function(e,a,t){"use strict";t("OGtf")("link",(function(e){return function(a){return e(this,"a","href",a)}}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e123f57b478a7f2f3bac.js.map