---
title: "Introducción al uso de memoria en PHP"
date: "2020-07-22"
---

## Ciclo de vida de PHP

*Esta es una versión resumida y simplificada del ciclo de vida de una request PHP. Para más información sobre el tema el mejor recurso es la sección de [Diseño de Extensiones](http://www.phpinternalsbook.com/php7/extensions_design.html) del [PHP Internals Book](http://www.phpinternalsbook.com/index.html).*

Ya sea que estemos ejecutando un script desde la línea de comandos o a través de FPM, el proceso de arranque del modulo, abreviado MINIT, es el primer paso del proceso de ejecución y el encargado de preparar todo para que el engine de PHP pueda procesar requests.

En esta etapa PHP carga toda aquella configuración e información común a todas las peticiones. Por su parte, las extensiones definen e inicializan todos los recursos que vayan a necesitar.

Una vez terminado el MINIT, PHP queda a la espera para procesar una o más peticiones dependiendo de nuestra configuración e implementación.

Cuando esta petición llega, el primer paso (RINIT) es inicializar el entorno para el engine, entre otras cosas la tabla de símbolos que es donde se van a almacenar todas nuestras variables durante la ejecución.

Adicionalmente, durante el RINIT, todas las extensiones tienen la posibilidad de realizar procesos específicos a la petición como registrar sus propias variables, modificar las globales, étc.

Una vez que el se terminó de procesar la petición, PHP inicia el proceso de limpieza (RSHUTDOWN).

A la inversa de RINIT, se llama primero a la correspondiente función de las extensiones para que gestionen su propio shutdown.

Luego PHP destruye la tabla de símbolos y libera todos los recursos reservados por la request.

Por último, ya sea porque estamos reiniciando el servicio o el servidor, al momento de realizar un gracefully shutdown de PHP se llama a MSHUTDOWN como contraparte de MINIT para limpiar y liberar todo lo ocupado por el módulo.

## Uso de memoria en PHP

Al ser las request de PHP normalmente efímeras y realizarse una limpieza a cero de los recursos entre petición y petición no es tan fácil percibir problemas en el uso de memoria.

Los leaks desaparecen al borrar toda la memoria reservada para la request. Adicionalmente, si bien la memoria por request de PHP puede no parecer mucha (128MB[^1]), todavía da un gran margen para olvidarse liberar o cargar recursos de más.

En general, los problemas con el uso de memoria, se notan cuando corremos con procesos que se extienden mucho en el tiempo o tienen que trabajar con archivos muy grandes.

## Garbage Collector

Como intento de solucionar el problema de la memoria sin liberar, PHP (y un largo étc) implementa un proceso de limpieza de memoria llamado **gabage collector**. En PHP, el GC funciona en base a contar referencias.

Cuando seteamos una variable, el contenido se almacena en memoria y el identificador (precedido por el signo $) nos permite leer y modificar dicho valor, es decir, funciona como referencia a dicho valor.

Cuando, por ejemplo, pasamos por referencia una variable a una función se genera un nuevo identificador que apunta al mismo valor en memoria.

Cuando trabajamos con objetos, por defecto, se trabaja con referencias. Si asignamos un objeto a una nueva variable o a un atributo, en vez, de copiarlo se crea una nueva refencia.

Cada una de esas referencias se cuenta y sirve para llevar un control del uso de la variable. Cuando se ejecuta el GC si se encuentra con partes de la memoria que no estan referidas por ninguna variable, "libera" esa memoria para que se pueda reutilizar.

*Nuevamente, esta es una simplificación. Una explicación más completa se puede encontrar en [esta presentación](https://speakerdeck.com/bitone/hunting-down-memory-leaks-with-php-meminfo) y en la [documentación oficial](https://www.php.net/manual/en/features.gc.refcounting-basics.php).*

## Referencias circulares

```php
class A {
  //
}

class B {
  //
}

$a = new A();
$b = new B();

$a->refB = $b;
$b->refA = $a;
```

Este código genera lo que se llama una referencia circular. Tanto *$a* como *$b* contienen una referencia a la otra variable que a su vez tiene una referencia a la original[^2]. En este caso el contador de referencias tanto para $a como para $b cuenta 2 referencias a cada una.

Si liberamos, por ejemplo, $b todavía queda en $a una referencia a la memoria donde estaba almacenado $b por lo que, en principio, el GC no libera esa memoria.

## Circular Reference Collector

Como paliativo a este problema a partir de la versión 5.3 de PHP se implemento un proceso especializado tratar estos casos.

El proceso de analizar y recuperar memoria de este colector es un proceso costoso por lo que únicamente se realiza cada 10.000 decrementos de cantidad de referencias.

Dependiendo del tamaño de los objetos en nuestra aplicación puede que el colector no se ejecute antes de que se agote la memoria por lo que es necesario tratar "manualmente" este tipo de situaciones.

## Streams

Para el tratamiento de archivos muy grandes, por ejemplo un padrón de clientes en formato CVS, PHP implementó en su versión 4 los streams.

Esta funcionalidad permite ir leyendo por partes un flujo de información, en este caso un archivo, evitando así tener que cargarlo completamente en memoria[^3].

En su variante más sencilla se utiliza fopen y fgets para leer línea por línea el archivo:

```php
$handle = @fopen("/tmp/inputfile.txt", "r");
if ($handle) {
    while (($buffer = fgets($handle, 4096)) !== false) {
        echo $buffer;
    }
    if (!feof($handle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($handle);
}
```

De esta forma, podemos leer un archivo de, por ejemplo, 200MB sin utilizar más que 4KB a la vez.

Más información sobre el uso de streams se puede encontrar en el artículo [A Guide to Streams in PHP: In-Depth Tutorial With Examples](https://stackify.com/a-guide-to-streams-in-php-in-depth-tutorial-with-examples/).

## WeakReference

En el caso de las referencias PHP 7.4 trae una nueva clase llamada *WeakReference* que como su nombre lo indica nos permite trabajar con referencias débiles. Es decir, referencias que no son contabilizadas.

```php
class A {
  //
}

class B {
  //
}

$a = new A();
$b = new B();

$weakA = WeakReference::create($a);
$weakB = WeakReference::create($b);

$a->refB = $weakB;
$b->refA = $weakA;

unset($b);

var_dump($a->refB); // NULL
```

Al generar una WeakReference le indicamos al GC que el código está preparado para la posibilidad de que el objeto referido no exista y, por lo tanto, es libre de liberar la memoria si no está siendo utilizado en otro lado.

## Desreferencia manual

Si no estamos trabajando con una versión de PHP que soporte este tipo de referencias débilos, siempre queda la posibilidad de implementar un método propio:

```php
class A {
  //
}

class B {
  public function destroy() {
    $this->refA->refB = null;
  }
}

$a = new A();
$b = new B();

$a->refB = $b;
$b->refA = $a;

$b->destroy();
unset($b);
```

## Conclusión

Estos son algunos de los problemas más comunes y posibles soluciones para los problemas de memoria en PHP.

En muchos casos los problemas surgen de implementaciones descuidadas más que de errores del lenguaje pero estos últimos casos tampocos son despreciables y existen más posiblidades de que aparezcan mientras más extensiones tengamos cargadas.

Por último, hay veces que puede ser necesario hacer un tradeoff para hacer más legible el código o por reglas de negocio, en estos casos es importante saber que riesgos conlleva por si surgen a futuro problemas.

---

Fuentes:
- https://www.moxio.com/blog/33/finding-memory-issues-in-php-programs-part-1
- https://www.moxio.com/blog/36/finding-memory-issues-in-php-programs-part-2
- https://tideways.com/profiler/blog/the-difficulty-of-memory-profiling-in-php
- https://johann.pardanaud.com/blog/about-circular-references-in-php
- https://www.php.net/manual/en/features.gc.collecting-cycles.php

[^1]: Valor por defecto. https://www.php.net/manual/en/ini.core.php#ini.memory-limit

[^2]: Un ejemplo clásico de este tipo de relación entre clases se suele dar en las implementaciones de jerarquías. El parent tiene referencias a los children y estos, a su vez, al parent.

[^3]: Por ejemplo, al utilizar [*file_get_contents*](https://www.php.net/manual/en/function.file-get-contents.php).