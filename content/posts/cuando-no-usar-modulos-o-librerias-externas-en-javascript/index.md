---
title: "Cuándo (no) usar módulos o librerías externas en JavaScript"
date: "2018-05-22"
---

##### Cuándo no sabemos cómo programar la funcionalidad

Los módulos o librerías tienen que simplificar el proceso de desarrollo, no reemplazarlo. Su función es agilizar la escritura de código aportando una capa de abstracción sobre una funcionalidad cuyo desarrollo es complejo o engorroso. Si no sabemos cómo se hace algo, difícilmente podamos resolver los errores que surjan o sacar el máximo provecho a la herramienta que estamos usando.

##### Cuándo la funcionalidad aportada por el módulo o librería es mínima

Para entender esto nada mejor que referirnos a la historia de [left-pad](https://github.com/stevemao/left-pad/blob/master/index.js) y como la baja por parte de su autor del módulo de 11 líneas de código provocó lo más parecido a un [apocalipsis informático](https://www.todojs.com/una-pequena-libreria-puede-dejar-sin-funcionar-miles-paquetes/) desde el Y2K. Casos similar es el módulo [isarray](https://github.com/juliangruber/isarray) con una línea de código y 10 millones de descargas semanales. Es necesario encontrar un balance, externalizar funciones muy sencillas nos expone a ciertos riesgos que no los corremos con módulos o librerías más complejas; no hacerlo implica tener que escribir más código con lo cual podemos cometer más errores pero nos aseguramos que esté siempre disponible y sea funcional en nuestro ecosistema.

##### Cuándo vamos a utilizar una única función de una librería multipropósito o general

Es muy común ver en una página, Bootstrap y sus dependencias jQuery, Hammer.js y Popper.js al completo para utilizar una grilla para acomodar los contenidos o jQuery, jQuery UI, y Select2 para implementar un select con autocomplete o, más últimamente, React + Babel para mostrar un sitio a todos los efectos estático del lado del cliente. Si únicamente vamos a necesitar una funcionalidad específica es más que probable que existan algunas librerías específicas o que su implementación sea lo suficientemente sencilla para que podamos crear nuestro propio módulo.

##### Cuándo necesitamos la máxima velocidad y el mínimo tamaño

Raramente es necesario lograr tan alto nivel de optimización pero, de hacer falta, siempre se logran mejores resultados mientras menos capas de abstracción y recursos externos utilicemos.
