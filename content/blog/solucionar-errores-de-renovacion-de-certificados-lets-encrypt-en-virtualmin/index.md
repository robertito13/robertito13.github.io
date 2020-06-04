---
title: "Solucionar errores de renovación de certificados Let's Encrypt en Virtualmin"
date: "2016-07-15"
---

Para los que administramos nuestros servidores con Virtualmin y probamos desde que apareció la gestión de certificados SSL con Let's Encrypt, la renovación de los mismos probablemente nos esté dando varios quebraderos de cabeza. Dos de los errores más comunes son:

- Permission Denied al ejecutar mkdir
- Invalid response from http://www.example.com/.well-known/acme-challenge/...

La solución de ambos problemas es sencilla. En caso del _Permission Denied_, se produce porque la primera implementación de Let's Encrypt en Virtualmin usaba el usuario root para crear la carpeta .well-known y sus contenidos mientras que ahora, como debería ser, utiliza el usuario 'propietario' del dominio. Para solucionarlo, desde el File Manager en el panel o a través de SSH, eliminamos la carpeta y cuando ejecutemos la renovación la vuelve a crear con los permisos correctos.

El error de _Invalid response_, se produce porque no puede acceder desde afuera a la dirección indicada. Se suele producir por varias razones, un .htaccess o web.config muy restrictivos, una política de redirección en Nginx o que se esté forzando la conexión https para todas las conexiones a través de la configuración del servidor. Se puede solucionar agregando una excepción para la carpeta .well-know o, desactivando temporalmente, las políticas que puedan estar evitando el acceso en la configuración de nuestro servidor web.
