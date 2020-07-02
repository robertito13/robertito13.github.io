---
title: "WordPress CS en VSCode"
date: "2019-05-30"
---

WordPress tiene recomendaciones sobre cómo se debe escribir el código tanto si es para el core como para plugins y themes e incluso para la documentación.

Como hay una gran cantidad de aspectos tratados por estas reglas y, a veces, las mismas son contra intuitivas o por lo menos van en contra de los usos y costumbres es necesario incluir herramientas en nuestro workflow que nos obliguen a seguirlas y nos marquen cuando nos olvidemos.

Primero, para todo el código en JavaScript trabajaremos con [ESLint](https://eslint.org/) y el plugin homónimo para VSCode. Primero instalamos el [paquete de reglas](https://www.npmjs.com/package/eslint-config-wordpress):

```shell
npm install --save-dev eslint-config-wordpress
```

Si no tenemos instalado eslint globalmente también tendremos que instalarlo.

Lo siguiente es crear el [archivo de configuración](https://eslint.org/docs/user-guide/configuring) y agregar lo siguiente:

```json{numberLines: true}
{
  "extends": "wordpress"
}
```

En caso de trabajar en Windows y, dependiendo del editor y nuestra configuración, puede ser útil desactivar la regla que nos marca los saltos de línea incorrectos. WordPress espera que utilicemos _\\n_ y Windows utiliza _\\r\\n_:

```json{numberLines: true}
{
  "extends": "wordpress",
  "rules": {
    "linebreak-style": "off"
  }
}
```

Con esto estaría la configuración de ESLint, ahora pasamos a VSCode. Buscamos el plugin [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y lo instalamos. Si no tenemos ninguna configuración u organización partícular debería funcionar out-of-the-box.

En caso de necesitar tunear la configuración para indicar otros path o ajustes, en el Summary del plugin están detalladas todas las configuraciones necesarias.

En lo que respecta a PHP la idea es utilizar [PHP Code Sniffer](https://github.com/squizlabs/PHP_CodeSniffer) y el plugin phpcs. Nuevamente, arrancamos instalando todo con Composer:

```shell
composer require --dev squizlabs/php\_codesniffer wp-coding-standards/wpcs
```

A continuación tenemos que indicarle a PHP Code Sniffer donde encontrar las reglas que instalamos:

```shell
./vendor/bin/phpcs --config-set installed\_paths vendor/wp-coding-standards/wpcs
```

Ahora, en VSCode buscamos e instalamos el plugin [phpcs](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs) y lo configuramos ya sea a través de la interfaz o editando el settings.json:

```json{numberLines: true}
{
  "phpcs.enable": true,
  "phpcs.standard": "WordPress-Core",
}
```

Con respecto al standard tenemos 4:

- WordPress-Core: Conjunto principal de reglas establecidos para codificar en PHP para WordPress.
- WordPress-Docs: Reglas que abarcan todo lo relacionado con la documentación de código PHP.
- WordPress-Extra: Un superconjunto que incluye a WordPress-Core y lo extiende agregando reglas que fomentan buenas prácticas que no están contempladas en los estándares de WordPress.
- WordPress: El superconjunto que incluye todos los ruleset antes mencionados.

A menos que estemos contribuyendo directamente con WordPress me quedaría con el WordPress-Core o WordPress-Extra para evitarnos el rollo de la documentación que por momentos llega a ser barroca.

Existen, también, reglas para la correcta escritura del HTML y los stylesheet. En el primer caso la recomendación oficial va por el uso del [W3C Validator](https://validator.w3.org/) y en el otro hay un conjunto de reglas para [stylelint](https://stylelint.io/) pero, por ahora, no lo utilicé nunca así que queda para otro momento esa parte.
