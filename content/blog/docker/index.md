---
title: "Docker"
date: "2019-05-03"
---

Hace unos meses como consecuencia de haber tenido que cambiar de discos en mi PC me encontré con la necesidad de volver a montar un entorno local de desarrollo. Como buen programador, decidí que montar todo igual que antes era demasiado sencillo y decidí revisar desde cero mi stack.

El primer cambio importante fue el abandonar Windows 10 + WSL por Ubuntu 18.04. Hay dos razones principales para esta decisión: la [velocidad de I/O](https://rvaccaro.com.ar/2018/04/rendimiento-de-wsl/) y los contenedores. Ya sea por el manejo de la fragmentación o falta de DNLC, los problemas de NTFS con los directorios con gran cantidad de archivos son históricos y agregarle una capa más de abstracción como es el subsistema de Linux no ayuda. Si agregamos que WSL no soporta cgroups por lo que no nos permite ejecutar nativamente containers el salto de un SO a otro es un paso lógico.

Anteriormente tenía en Windows instalado XAMPP y mediante el uso de [junctions](https://docs.microsoft.com/en-us/windows/desktop/fileio/hard-links-and-junctions), el archivo hosts y algunos truquillos más codeaba en VSCode, utilizaba Webpack, Gulp, étc en WSL y visualizaba en un navegador en Windows.

Este workflow funcionaba en general bastante bien pero presentaba una rigidez notable y era poco práctico para testear cosas nuevas. Por esto, con el paso a Linux, la instalación de un sistema de gestión de contenedores era un must. La opción inicial era LXD pero este resultó estar más orientado a contenedores de SO que de aplicaciones. Si bien da mucha más flexibilidad para la configuración implica también más intervención del usuario mientras que Docker agrega una capa de abstracción que automatiza mucho de estos procesos lo que se adaptaba mejor a mis necesidades.

## Primeras impresiones

Docker Compose es, diría, indispensable para el uso diario de Docker. Un simple archivo yaml permite configurar en unas pocas líneas una aplicación de múltiples contenedores.

En un principio el sistema de imágenes parece poco personalizable hasta que se descubre la posibilidad de montar "volúmenes" que, a los efectos prácticos, no son más que los tradicionales soft links entre el host y el contenedor. Esta posibilidad de compartir archivos y directorios nos permite, por ejemplo, externalizar en un repositorio git los archivos de configuración para mantenerla fácilmente sincronizada. O hacer lo mismo con la carpeta de datos de MySQL para volver los mismos persistentes entre distintos contenedores o replicar fácilmente la BBDD en producción.

La suma de los dos puntos anteiores vuelve el montar sistemas de prueba algo eficiente y completamente automatizable lo que repercute mucho en las ganas de hacer y usar los tests y sus beneficios asociados.

Habiendo trabajado antes con VM las diferencias de uso de recursos y tiempo de warm up y mantenimiento con Docker son bastante grandes. La configuración de los network bridge son un problema que queda en manos de Docker liberándonos de una tarea, por lo menos en desarrollo, que suele mostrarse por demás conflictiva. Esto no significa que no podamos trabajar con redes pero si que no es necesario hacerlo con Docker out-of-the-box en entornos privados.

Los repositorios públicos de imágenes son uno de los fuertes de Docker. Hasta el momento no me pasó de encontrarme sin una aplicación que necesitara y no tuviera su respectiva imagen.

## Limitaciones

Como siempre, no todo es un camino de rosas y Docker presenta algunas limitaciones y problemas que pueden hacer que nos agarremos la cabeza hasta que le encontremos la vuelta para evitarlos.

Si bien Docker, y los containers en general, son una gran mejora sobre las VM todavía presentan un overhead que para los costes de servidor en el tercer mundo son demasiado altos por lo que por ahora el deploy va a seguir siendo bare metal o VPS.

El manejo de permisos de los volumenes es complejo, a los efectos prácticos estamos compartiendo archivos y carpetas entre dos SO diferentes, con usuarios diferentes. Sumado a eso, por defecto, los comandos se ejecutan como root dentro de los containers y, por lo tanto, los archivos creados por esos comandos suelen pertenecer al mismo usuario y grupo mientras que los que creamos en el host suelen tener permisos para nuestro usuario.

Todo en Docker está pensado para ocultar las complejidades del manejo de contenedores y esto inevitablemente nos lleva a soslayar los problemas de seguridad. Por ejemplo, por defecto, los containers no tienen ningún límite a los recursos que pueden utilizar; como siempre que utilizamos recursos públicos, únicamente un análisis de seguridad o usando self baked images nos podemos asegurar que no estemos utilizando una rogue image con backdoors; étc.

## Trucos y consejos

En Linux los permisos se manejan con el UID y el GID, no con el nombre de usuario y grupo. Si en nuestro container el id de www-data coincide con el de nuestro usuario en el host, el manejo de permisos se vuelve más sencillo. Este truco es conocido por los que usan Docker hace más tiempo e incluso algunas imágenes, como la de [PHP](https://hub.docker.com/_/php/), lo soportan por defecto.

Este es más un truco de Bash que de Docker pero igualmente útil. Muchas veces necesitamos trabajar con todos los containers activos lo que es sumamente engorroso porque implica ejecutar docker por cada container. Para evitar esto podemos utilizar la sustitución de comandos de Bash de la siguiente forma:

docker stop $(docker ps -q)

Este comando va a ejecutar stop en todos los containers activos.

Para poder ver en tiempo real los logs de un container de Docker (o de varios si usamos Docker Compose):

docker logs -f <contenedor>

Hacer y restaurar backups de nuestros container es muy sencillo:

\# Hacer el backup del contenedor a una imagen
docker commit -p <container id> <image name>

# Exportar la imagen a un archivo
docker save -o <filename.tar> <image name>

# Restaurar una imagen a partir de un archivo
docker load -i <filename.tar>

# Restaurar (crear) un contenedor a partir de la imagen
docker run <image name>

Por último, el parámetro ports de Docker Compose sirve para exponer puertos del container en el host pero su formato en vez de ser origen:destino como resulta intuitivo es exactamente al revés. Nada que sea complicado pero recordarlo evitará darnos la cabeza contra la pared cuando no sepamos por qué no funciona nuestro container.
