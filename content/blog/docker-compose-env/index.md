---
title: "Docker Compose: .env"
date: "2019-05-11"
---

Compose nos permite una gran personalización mediante el archivo de configuración pero hay algunas cosas que no están soportadas dentro del mismo. Para algunas de estas configuraciones existen parámetros que se pueden establecer en la línea de comando o mediante variables de entorno.

Estas formas son poco prácticas porque implican acordarse los parámetros o nombres de las variables y siempre están sujetas al riesgo de los errores de tipeo. Por suerte, Compose, automáticamente levanta el [archivo .env](https://docs.docker.com/compose/env-file/) y establece las variables durante el tiempo de ejecución.

Hay que tener en cuenta que estas variables no son visibles para los contenedores sino para Docker Compose.

Hay [varias](https://docs.docker.com/compose/reference/envvars/), pero las más interesantes son:

- COMPOSE\_PROJECT\_NAME: Permite establecer el nombre del proyecto. Esta cadena es la que usa Docker Compose como prefijo al momento de crear los containers. Por defecto utiliza el nombre de la carpeta actual.
- COMPOSE\_FILE: Para poder indicar el nombre del archivo de configuración que utilizará Docker Compose. Sirve para poder tener configurados distintos entornos ,por ejemplo, para desarrollo y para testing. Por defecto, _docker-compose.yml_.
- DOCKER\_HOST: En caso de que queramos utilizar el servicio de docker de un host remoto. Por ejemplo, tcp://192.168.0.13:2375. El valor por defecto apunta al socket local.
- DOCKER\_TLS\_VERIFY: Si es necesario utilizar TLS para conectarse al servicio de Docker, alcanza con establecer a cualquier valor aunque generalmente se establece a 1. Si no hace falta utilizar TLS **no** hay que setear la variable porque cualquier valor (incluidos vacio, cero, false, étc) van a habilitarlo.
- DOCKER\_CERT\_PATH: Si vamos a utilizar TLS vamos a necesitar certificados. Por defecto busca los archivos _ca.pem_, _cert.pem_ y _key.pem_ en la carpeta _~/.docker_ pero podemos establecer la que más nos convenga.
