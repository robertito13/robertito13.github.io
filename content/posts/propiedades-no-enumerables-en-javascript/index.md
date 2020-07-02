---
title: "Propiedades no enumerables en JavaScript"
date: "2018-05-09"
---

Hasta la especificación ES5 de JavaScript las propiedades de un objeto consistían únicamente de un nombre y un valor. A partir de 2009, fecha de publicación, se agregó la posibilidad de establecer 3 atributos de las propiedades que permiten controlar sus características:

- configurable
- writable
- enumerable

#### Configurable

Permite establecer si, luego de su creación, se podrán editar los atributos, eliminar la propiedad o modificar las funciones de acceso. Hay que tener en cuenta que una vez establecido a false, no puede volver ser modificado.

#### Writable

Indica si se puede modificar el valor de la propiedad mediante el uso de operadores de asignación.

#### Enumerable

Configura si la propiedad va a aparecer en el listado de propiedades del objeto. Por ejemplo, mediante el uso de _Object.keys()_. Si bien, en principio, no parece tener mucha utilidad es importante considerar qué otras funciones utilizan la enumeración de propiedades para ver su potencial.

Ya [mencioné con anterioridad](https://rvaccaro.com.ar/2018/05/05/limitaciones-y-diferencias-de-object-assign-y-el-operador-de-propagacion-en-javascript/) que el operador de propagación y Object.assign() únicamente copian aquellas propiedades enumerables. Además, permite ocultar propiedades de los bucles _for ... in_, ya que al no ser enumeradas no son recorridas por el mismo.

Pero, una de las consecuencias más útiles de establecer una propiedad como no enumerable es que serán ocultadas a JSON.stringify(). Esto nos permite tener, de forma sencilla, total control sobre la información que exponemos del objeto.

var obj = {
    'prop1': 'value1'
};
Object.defineProperty(obj, 'prop2', { value: 'value2', enumerable: false });

JSON.stringify(obj); // { prop1: value1 }
