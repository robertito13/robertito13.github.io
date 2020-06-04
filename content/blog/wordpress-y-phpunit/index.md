---
title: "Wordpress y PHPUnit"
date: "2018-08-15"
---

PHPUnit es uno de los frameworks para test unitarios automáticos para PHP más usados y el elegido por los desarrolladores de Wordpress junto con QUnit para probar la plataforma. Para facilitar las pruebas, los desarrolladores han creado ya todo un conjunto de test y clases auxiliares que nos resultarán muy útiles en nuestro workflow.  

## Instalación

**Primero**, necesitamos instalar PHPUnit en su versión 6 ya que la 7 no es soportada por Wordpress. Hay distintas formas documentadas en el [sitio del framework](https://phpunit.de/getting-started/phpunit-6.html) y podemos elegir la que más se adapte a nuestro entorno.

**Segundo**, creamos una nueva base de datos separada para los tests porque que la suite va a borrar todos los datos de las tablas de la instalación donde se ejecute.

**Tercero**, no es necesario pero definitivamente es la mejor forma de manejar el entorno de pruebas vamos a instalar wp-cli. Nuevamente, hay [varías formas](https://make.wordpress.org/cli/handbook/installing/) de llevar adelante la tarea y va a depender de nuestro entorno el método que elijamos.

Por mi parte, me ha dado mejores resultados la instalación recomendada: descargar el .phar, darle permisos de ejecución y ponerlo en una carpeta que esté en PATH.

**Cuarto**, nos situamos en la carpeta de la instalación de wordpress para utilizar las opciones del paquete scaffold de wp-cli para generar los archivos necesarios para instalar los tests según sea un plugin o un theme.

wp scaffold plugin-tests <nombre plugin>  
wp scaffold theme-tests <nombre theme>

**Quinto**, ejecutamos el archivo generado dentro de la carpeta del plugin/theme en el paso anterior para instalar el entorno de pruebas. Vamos a necesitar las credenciales y datos de acceso a la base de datos que creamos antes.

bin/install-wp-tests.sh <nombre bbdd> <usuario> <contraseña> <host>

Con esto queda todo listo para que empecemos a desarrollar nuestros tests y ponerlos en la carpeta homónima para que PHPUnit los encuentre.

Para más información sobre los unit test en Wordpress estos artículos van a dar una idea de las posibilidades:

- [An Introduction To Unit Testing](https://tfrommen.de/an-introduction-to-unit-testing-for-wordpress/) (Thorsten Frommen)
- [Writing PHPUnit Tests](https://make.wordpress.org/core/handbook/testing/automated-testing/writing-phpunit-tests/) (Wordpress.org)
- [Writing WordPress Plugin Unit Tests](https://codesymphony.co/writing-wordpress-plugin-unit-tests/) (codeSymphony)
- [Unit Testing WordPress Plugins with PHPUnit](https://premium.wpmudev.org/blog/unit-testing-wordpress-plugins-phpunit/) (WPMU Dev)
- [Unit Tests for WordPress Plugins – The Factory](https://pippinsplugins.com/unit-tests-for-wordpress-plugins-the-factory/) (Pippin’s Plugins)
