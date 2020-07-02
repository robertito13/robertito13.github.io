---
title: "Recursos útiles para el desarrollo web"
date: "2018-08-22"
---

Serie de herramientas y bibliotecas online que son útiles durante el proceso de desarrollo web.

## [Google Analytics](https://analytics.google.com/)

Podemos usar otro pero definitivamente este es el gestor de estadísticas gratuito más completo. Información en tiempo real e histórica sobre los horarios de acceso, distribución geográfica, origen, étc. Y, más interesante al momento de pensar la, datos sobre el tipo de dispositivos usados para conectarse (mobile, tablet o desktop), el navegador o la resolución de pantalla. Por último, si tenés instalado el plugin (ahora sin soporte pero todavía funcional) podés incluso analizar el click heatmap de tu sitio.

## [Can I Use](https://caniuse.com)

Una vez que ya sabemos todo sobre los dispositivos que los usuarios van a usar para conectarse al sitio, es momento de empezar a delimitar las tecnologías que vamos a tener disponibles. En 10 años Can I Use se ha vuelto el standard de facto para obtener este tipo de información. Alcanza con ingresar en el buscador el nombre de la tecnología, un comando o etiqueta relacionado y tendremos información sobre el soporte por versión en los distintos navegadores, el uso relativo de los mismos y notas al pie sobre cosas a tener en cuenta.

## [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)

Definidas las tecnologías empieza el momento de [picar código](https://www.youtube.com/watch?v=loMEF18Ir4s) y comienzan, también las dudas que si un checkbox lanza un evento _click_ o un _change_, que cual era el comando para agregar un elemento al principio de un _Array_, étc. Mientras más tecnologías están involucradas en el desarrollo web más difícil es acordarse al dedillo de todo y ahí entra a jugar MDN Web Docs una de las referencias más completas en el tema.

## [CSS-Tricks](https://css-tricks.com)

Si bien MDN Web Docs tiene un apartado para CSS, la autoridad en el tema es de CSS-Tricks. Desde snippets a, como su nombre lo indica, trucos y consejos relacionados con el uso de los estilos y una galería de ejemplos de los más interesantes.

## [CSS Triggers](https://csstriggers.com)

Una vez que ya empieza a tomar forma el sitio, empezamos a agregar más interactividad al mismo mediante la captura de eventos y manipulación del DOM. Estas modificaciones del modelos de objetos repercuten directamente en el CSSOM y pueden implicar un reflow, un repaint o un relayout cada uno con sus respectivas demoras. Cuando necesitamos saber si es mejor usar _transform_ o modificar directamente el _width_ de un objeto ahí entra CSS Triggers para no equivocarse.

## [Regular Expressions 101](https://regex101.com)

Hablando de tópicos donde hace falta un ayuda memoria, llegamos a las expresiones regulares. Karma de muchos programadores, Regular Expressions 101 trae tanto una referencia como un entorno de pruebas para poder generar ese pattern perfecto.

## [Debuggex](https://debuggex.com)

Ya ni nos acordamos que matchea ese pattern que tenemos delante o estamos leyendo código de otra persona y vamos medio perdidos nada mejor que Debuggex, un tester visual que nos permite ver de qué va la cosa.

## [CSS Stats](https://cssstats.com)

Recién habíamos terminado de armar todo cuando el cliente nos pidió "unos pocos cambios, algo acá y allá" o llevamos tiempo en producción y hasta el hijo de la vecina, "que sabe un poco de computadoras", metió mano. Por lo que sea terminamos con [402 colores únicos](https://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F51ce5f8445dece60ef49d6b7dcc4e538%2Fraw%2Fe5349db6f1ccbd175f7dd7c581e061b4d49c1ff4%2Fgitlab.css) o [12k de reglas](https://cssstats.com/stats?url=http%3A%2F%2Fpinterest.com&name=Pinterest) y no lo sabemos. Llevar un buen control sobre la situación de nuestros archivos de estilo es una tarea que se ve tremendamente simplicada con CSS Stats.

## [Pingdom](https://tools.pingdom.com)

Siguiendo en la línea de controlar la performance del sitio, entramos en el área de las herramientas más generales como Pingdom que nos provee rápidamente con un resumen de la situación general. Vistoso por demás, también resulta útil para "robar" algunos gráficos para presentar al cliente.

## [WebPagetest](http://webpagetest.org)

Lo que Pingdom tiene de bonito, WebPagetest lo tiene de detallado. Nunca lo vamos a usar como imagen en un Power Point pero si necesitamos estadísticas precisas para ver dónde está el cuello de botella en la carga o qué script está consumiendo demasiado tiempo este sitio nos va a permitir encontrar la información que buscamos.
