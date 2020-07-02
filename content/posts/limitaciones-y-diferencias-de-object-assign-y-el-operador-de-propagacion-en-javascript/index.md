---
title: "Limitaciones y diferencias de Object.assign() y el operador de propagación en JavaScript"
date: "2018-05-05"
---

Con el (nuevo) auge de la programación funcional y de librerías como [Redux](https://redux.js.org) ha resurgido el concepto de inmutabilidad. La existencia de estructuras de datos que no pueden cambiar su valor luego de haber sido iniciadas. Cualquier manipulación de la información requiere que creemos un nuevo objeto que copie los datos del original e introduzca los cambios deseados.

Más allá de las ventajas y desventajas de la inmutabilidad, en la práctica, cuando lo implementamos en nuestras aplicaciones nos encontramos en la necesidad de copiar con cierta asiduidad estructuras de datos. En ES6, como siempre en JavaScript, la forma elegida para la representación de estos datos son los objetos. Y aquí llegamos al tema del post, existen varias formas de copiar objetos.

Dejando de lado la forma más obvia y chabacana de copiar "manualmente" propiedad por propiedad, existen dos métodos para obtener una copia modificada de un objeto:

[**Object.assign()**](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign)

obj = Object.assign( target, source1, ..., sourceN )

Como su nombre lo indica, esta función no está pensada originalmente para clonar objetos sino para asignar nueva información a un objeto existente pero pasando como target un objeto "vacio" podemos lograr el mismo efecto.

[**Operador de propagación**](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator)

obj = { ...source1, ..., ...sourceN }

Ídem que con el caso anterior, la idea original de el operador de propagación no era copiar objetos sino simplificar la expansión de expresiones en situaciones donde se esperaba una cantidad múltiple y, generalmente, desconocida de parámetros. En este caso, la creación de un nuevo objeto que reciba como contenido el objeto original expandido es el truco para lograr  la copia deseada.

#### Diferencias

La diferencia entre estos métodos es que el primero setea nuevos valores en las propiedades de un objeto mientras que, el segundo, crea nuevas propiedades y les asigna información.

Es decir, si tenemos setter definidos en nuestro objeto, Object.Assign() los va a llamar y el operador de propagación, no. Esto también tiene como consecuencia que si nuestro objeto tiene propiedades de solo lectura el operador de propagación no las va a respetar, únicamente el Object.Assign().

#### Limitaciones

Las principales limitaciones que nos encontramos con ambos métodos es que la copia realizada es superficial y que únicamente se consideran las propiedades propias y enumerables del objeto.

Es decir, el nuevo objeto no ninguna propiedad definida en prototype, heredada o que se haya indicado explícitamente como no enumerable. Además, si tenemos algún objeto anidado este no se copiará sino que lo hará su referencia.

 

En conclusión ambas opciones son muy similares y [su rendimiento](https://www.measurethat.net/Benchmarks/Show/2136/0/javascript-spread-operator-vs-objectassign-performance) es casi idéntico, aunque un poco mejor el del operador de propagación, por lo que el decantarse por uno u otro depende más de cuestiones subjetivas.

Particularmente, encuentro el funcionamiento del operador de propagación más acorde a lo que significa trabajar con objetos inmutables ya que si o si crea un nuevo objeto. Además, al momento de tratar con objetos anidados, resulta mucho más legible:

cons obj = {
    prop1: value1,
    obj1: {
        prop2: value2,
        prop3: value3
    }
}

const copia = {
    ...obj
    obj1: {
        ...obj.obj1
    }
};
