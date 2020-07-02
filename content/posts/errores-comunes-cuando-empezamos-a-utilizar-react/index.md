---
title: "Errores comunes cuando empezamos a utilizar React"
date: "2018-05-28"
---

#### Olvidar la clave de los elementos al usar map

Si bien no es un error, por eso únicamente genera una advertencia, el uso de keys (claves) es una práctica altamente recomendada. Las keys en los elementos de una lista permiten individualizarlos y tratarlos de forma independiente del resto de la lista y de su orden dentro de la misma.

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = \[1, 2, 3, 4, 5\];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

Este código devuelve la siguiente lista:

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>

Si agregamos el elemento 0 (cero) al arreglo numbers, obtendríamos

<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>

Es el resultado que queríamos obtener, ¿qué diferencia hacen entonces las keys?

Las keys lo que hacen es cambiar drásticamente la eficiencia en la React hace los cambios al DOM. Sin las keys, se hace una comparación elemento a elemento de la lista anterior con la nueva basados en su posición dentro de la misma, el primer elemento de la vieja se compara con el de la nueva y así sucesivamente. Si hay una diferencia con entre estos elementos React se encarga de mutar el DOM para reflejarlo.

En este caso, el primer elemento de la lista vieja es el 1 y el de la nueva el 0 por lo que se cambia el DOM; los siguientes elementos a comparar son el 2 de la vieja y el 1 de la nueva con lo que se vuelve a cambiar el DOM. Así hasta recorrer toda la lista. En la práctica para agregar un nuevo elemento en una lista con cinco ítems, hacemos 6 cambios en el DOM.

Si tenemos las keys asignadas, cada elemento de la lista vieja se compara con el elemento que tenga la misma key en la lista nueva. Entonces, los elementos preexistentes que no hayan sido modificados, todos en este caso, se mantienen, no generan mutaciones en el DOM. Únicamente se agrega un elemento para reflejar el nuevo ítem del arreglo y se hace un cambio para actualizar el DOM.

#### Devolver más de un componente o elemento

El método render de React espera recibir un componente o elemento, todo el demás contenido que queramos incluir tiene que estar anidado dentro de este. Construcciones al estilo:

<img src="..." alt="..."><br>

<label for="...">...</label><input type="...">

<h3>...</h3>
<p>...</p>

Todas son correctas en lo que a HTML respecta pero son erróneas como return del método render.

#### Olvidarnos de exportar los componentes

// Mensaje.js
import React, {Component} from 'react';

class Mensaje extends Component {
    render() {
        return (
            <div className="mensaje">{ this.props.texto }</div>
        );
    }
}

// index.js
import React, { Component } from "react";
import { render } from "react-dom";

import Mensaje from './Mensaje.js';

class App extends Component {
    render() {
        return (
            <div>
                <h3>Mi mensaje</h3>
                <Mensaje texto="Hola Mundo!" />
            </div>
        );
    }
}

render( <App />, document.getElementById('root') );

Al correr este código obtendremos el siguiente error:

> Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components). Check the render method of \`App\`.

Podemos revisar letra por letra el contenido del método render del componente App y no vamos a encontrar ningún error porque el problema está en _Mensaje.js_. Si lo revisamos atentamente podemos ver que nos faltó exportar la clase por defecto por lo que cuando importamos en App, terminamos con una variable apuntando a la nada misma en vez de al componente esperado.

En este caso, al tener 4 líneas únicamente el componente App es muy sencillo darnos cuenta que el error no se encuentra en este pero, en una aplicación más grande, con varios componentes externos y un par de operadores ternarios puede ser muy difícil detectarlo.

#### Modificar el estado de forma directa

Uno de los principios de funcionamiento de React es la inmutabilidad de la propiedad state del componente. Aunque dicha inmutabilidad no es ([era](https://rvaccaro.com.ar/2018/05/propiedades-no-enumerables-en-javascript/)) posible de garantizar en tiempo de ejecución por lo que el siguiente código será ejecutado sin generar errores ni advertencias de ningún tipo:

this.state.contador = 0;

Pero en la próxima llamada a setState el cambio será descartado de forma silenciosa provocando que el código no funcione de la forma esperada pero sin generar ningún tipo de error.

#### Añadir cosas al estado que no están relacionadas con el renderizado del componente

Cada vez que se realiza un cambio en el estado de un componente este va a ser renderizado de nuevo por lo que es importante no incluir en el mismo atributos que no tengan que ver con el render.

Por ejemplo, si creamos un componente encargado de subir un archivo vía ajax e incluimos una barra de progreso que permite ver el porcentaje de carga y usamos un atributo del estado para llevar el control del porcentaje, cada vez que este varíe el componente va a volver a ser renderizado provocando la interrupción de la carga en el peor de los casos y que en el componente sea renderizado 100 veces en el mejor.

Ídem si creamos un componente que ejecute una acción cada x segundos y guardamos un contador de las veces que fue ejecutado en el estado.

La forma correcta de guardar este tipo de datos es utilizar variables específicas de la instancia.

var counter = 0;
var timer;

componentDidMount() {
    timer = setInterval(this.tick, 1000);
}

tick() {
    this.counter++;
}

componentWillUnmount() {
    this.clearInterval(this.timer);
}

render() {
  <div>Ejecuciones: { this.counter } </div>
}

En la misma línea de lo antedicho, cualquier dato que pueda ser calculado a través de las propiedades pasadas al componente tampoco debería ser almacenada en el estado.

#### No usar propTypes

Muchos errores en el funcionamiento de nuestros componentes pueden ser difíciles de detectar si no utilizamos propTypes. Esta librería nos permite especificar exactamente el tipo de dato que esperamos recibir y tira un error cuando esto no ocurre permitiendo saber dónde empezar a buscar el problema.

#### Pasar props numéricos como strings

Si pasamos a nuestro componente a través de las propiedades un valor numérico entrecomillado, ese valor va a ser pasado como un string. Si queremos que el tipo sea correcto tenemos que recurrir a las llaves como cuando pasamos el valor de las variables.

<Componente num={13} />

#### Olvidarse que el método setState es asincrónico

Las llamadas a setState se ejecutan de forma asincrónica por lo que no podemos fiarnos que el estado se modifique inmediatamente y, por lo tanto, que las evaluaciones que hagamos basados en el mismo reciban el estado actualizado en el momento de realizado el cambio.

setState({contador: this.state.contador + 1});
if (contador >= 5) {
    // ...
}

El bloque condicional del código anterior no se puede asegurar que se vaya a ejecutar cuando contador sea igual a 5. Dependiendo de lo que tarde en actualizarse el estado puede que cuando lo haga, el contador valga 6 o 7.

#### Usar class en vez de className

A menos que estemos utilizando React en conjunto con los Web Components \[note\]Por ahora únicamente tienen soporte en Chrome por lo que es poco probable.\[/note\], si queremos asignar una clase CSS a un elemento HTML, tenemos que utilizar className.

<div className="container">...</div>

#### No comenzar el nombre de un componente con mayúscula

Para React, los componentes se diferencian de las etiquetas HTML mediante el nombre. Si el nombre comienza con mayúscula se considera un componente y se lo compila como los demás. Si el nombre comienza con minúscula se considera una etiqueta HTML y se pasa como un string, es decir, no va a ser compilado con todas sus consecuencias.
