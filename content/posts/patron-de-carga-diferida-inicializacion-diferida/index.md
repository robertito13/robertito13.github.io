---
title: "Patrón de Carga Diferida: Inicialización diferida"
date: "2018-05-17"
---

El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las características de un programa son usadas durante su ejecución o para distribuir los tiempos de carga, cuando estos son muy grandes, durante la ejecución para poder mejorar los tiempos de respuesta al iniciar.

Hay cuatro formas comunes de implementar la carga diferida: inicialización diferida, proxy virtual, fantasma y value holder.

##### Inicialización diferida

Esta técnica implica la inicialización del contenedor del recurso como nulo, o equivalente en el lenguaje, y recién realizar la carga en el momento de su primer uso.

Por ejemplo, establecer el identificador de la conexión al servidor de bases de datos como null y al momento de realizar una consulta, verificar si la conexión está inicializada o hace falta establecerla.

Algunas consideraciones que es necesario tener en cuenta al utilizar este patrón son:

- Es necesario que cada vez que vayamos a usar el recurso del que estamos difiriendo su inicialización verifiquemos que haya sido cargado. Si bien a nivel performance no debería influir, si puede ser fuente de otros errores por olvido o por tener código duplicado.
- Como en cualquier otro método de carga diferida, nos podemos encontrar conque el recurso no existe o no está accesible. Además, si toma mucho tiempo cargarlo, la ejecución del programa se puede ver interrumpida.

<?php

class BBDD {
  private $user;
  private $pass;
  private $host;
  private $name;

  private $connection;

  function \_\_construct( $user, $pass, $host, $name ) {
    $this->user = $user;
    $this->pass = $pass;
    $this->host = $host;
    $this->name = $name;

    $this->connection = null;
  }

  function conectar() { /\*\*\*/ }

  function query( $sql ) {
    if ($this->connection == null)
      $this->conectar();

    /\*\*\*/
  }
}
