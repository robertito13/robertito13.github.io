---
title: "Docker: Wordpress"
date: "2019-05-05"
---

Siguiendo con el tema de Docker, uno de mis usos preferidos es utilizarlo para crear entornos locales para testear WordPress. Si bien hay una [imagen](https://hub.docker.com/_/wordpress) oficial de WordPress para Docker su configuración out-of-the-box necesita algunos ajustes para sernos de utilidad.

Primero, el archivo _docker-compose.yml_:

version: "3"

services:
  mysql:
    image: mysql:5.7
    restart: "no"
    volumes:
      - ./wordpress/database:/var/lib/mysql
    environment:
      MYSQL\_ROOT\_PASSWORD: wordpress
      MYSQL\_DATABASE: wordpress
      MYSQL\_USER: wordpress
      MYSQL\_PASSWORD: wordpress

  wordpress:
    depends\_on:
      - mysql
    image: wordpress
    ports:
      - 8080:80
    restart: "no"
    volumes:
      - ./wordpress/content:/var/www/html/wp-content
      - ./wordpress/.htaccess:/var/www/html/.htaccess
      - ./wordpress/php.ini:/usr/local/etc/php/conf.d/wordpress.ini
      - <build dir>:/var/www/html/wp-content/themes/<theme name>
    environment:
      WORDPRESS\_DB\_HOST: mysql
      WORDPRESS\_DB\_NAME: wordpress
      WORDPRESS\_DB\_USER: wordpress
      WORDPRESS\_DB\_PASSWORD: wordpress
      WORDPRESS\_DEBUG: 'true'

  adminer:
    depends\_on:
      - mysql
    image: adminer
    restart: "no"
    ports:
      - 8000:8080
    environment:
      ADMINER\_DEFAULT\_SERVER: mysql

Como vemos, trabajo con 3 images: _mysql_, _wordpress_ y _adminer_.

En la primera, _mysql_, creo un volumen que apunta a **./wordpress/database** en el host y a **/var/lib/mysql** en el container lo que me permite persistir la información de la base de datos mediante el sencillo proceso de almacenar los archivos de datos de MySQL en el host. Es importante que especifiquemos la versión de MySQL en vez de usar latest, para evitar que los datos se pierdan al actualizarse el servidor.

La segunda, **wordpress**, tiene 4 volumenes creados:

- **./wordpress/content**, nos permite persistir plugins, themes, actualizaciones, étc.
- **./wordpress/.htaccess**, nos sirve para poder trabajar con el .htaccess de WordPress. En mi caso lo utilizo para redirigir las solicitudes a la carpeta uploads al servidor de producción para no tener que replicarla cada vez que creo un container para hacer pruebas.
- **./wordpress/php.ini**, nos da la posibilidad de configurar algunos parámetros de PHP. Son de particular interés el tamaño máximo de los uploads y el tiempo de ejecución ya que los por defecto son muy chicos.
- **<build dir>**, este es el directorio donde se encuentra la build del theme (o plugin) con el que estemos trabajando.

Con respecto a las configuraciones, si no hicimos ningún cambio en las variables de la BBDD, no hace falta tocarlas. Si no necesitamos que esté activado el debug podemos borrar la susodicha configuración o ponerla en 'false'.

_adminer_, necesario para poder trastear con la BBDD. La única configuración que pasamos es más un QOL que otra cosa y sirve para establecer el servidor por defecto.

Una cosa importante a tener en cuenta es que, como Docker crea las carpetas correspondientes a los volúmenes con el usuario _root_, tenemos que cambiar el owner por el usuario _www-data_. Para esto, una vez creado los container, alcanza con ejecutar el siguiente comando:

docker-compose exec wordpress chown www-data:www-data /var/www/html/wp-content /var/www/html/wp-content/themes

Por último dejo el archivo .htaccess y php.ini que utilizo con las características antes comentadas:

<IfModule mod\_rewrite.c>
  RewriteEngine on
  RewriteBase /
  RewriteCond %{REQUEST\_FILENAME} !-f
  RewriteCond %{HTTP\_HOST} ^localhost:8080$
  RewriteRule ^wp-content/uploads/(.\*)$ https://server/wp-content/uploads/$1 \[NC,L\]
</IfModule>

file\_uploads = On
memory\_limit = 64M
upload\_max\_filesize = 64M
post\_max\_size = 64M
max\_execution\_time = 600
