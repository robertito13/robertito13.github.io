---
title: "Usar repositorios Git como paquetes de Composer"
date: "2015-12-04"
---

No todos los proyectos de GitHub están registrados en packagist.com o tienen creado un "composer.json" que nos permita agregarlo de forma sencilla en nuestro proyecto. Por suerte, composer nos permite salvar esta situación cargando los datos del repositorio directamente en nuestro archivo de dependencias.

Para hacerlo debemos cargar la información del proyecto en el array "repositories", especificando dónde están los fuentes, el nombre, la versión, étc.

{
  "repositories": \[
    {
      "type": "package",
      "package": {
        "name": "fullcalendar/fullcalendar",
        "version": "2.5.0",
        "dist": {
          "url": "https://github.com/fullcalendar/fullcalendar/archive/v2.5.0.zip",
          "type": "zip"
        },
        "source": {
          "url": "https://github.com/fullcalendar/fullcalendar.git",
          "type": "git",
          "reference": "tags/v2.5.0"
        },
        "require": {
          "components/jquery": ">=1.7.1",
          "moment/moment": ">=2.5.0"
        }
      }
    },
  \]

Como vemos, en última instancia, lo que hacemos es indicar manualmente toda la información que debiera tener el proyecto si estuviera cargado en el repositorio de packagist.com. Una vez hecho esto podemos usar el paquete como cualquier otro dentro de este proyecto con el nombre indicado en la propiedad "name".

Por ejemplo, el archivo "composer.json" de un proyecto donde incluyamos la librería Fullcalendar Scheduler, que depende de esta, quedaría así:

{
  "name": "rvaccaro/agenda",
  "authors": \[
    {
      "name": "Roberto Vaccaro",
      "email": "xxxx@xxxx.com"
    }
  \],
  "repositories": \[
    {
      "type": "package",
      "package": {
        "name": "fullcalendar/fullcalendar",
        "version": "2.5.0",
        "dist": {
          "url": "https://github.com/fullcalendar/fullcalendar/archive/v2.5.0.zip",
          "type": "zip"
        },
        "source": {
          "url": "https://github.com/fullcalendar/fullcalendar.git",
          "type": "git",
          "reference": "tags/v2.5.0"
        },
        "require": {
          "components/jquery": ">=1.7.1",
          "moment/moment": ">=2.5.0"
        }
      }
    },
    {
      "type": "package",
      "package": {
        "name": "fullcalendar/scheduler",
        "version": "1.1.0",
        "dist": {
          "url": "https://github.com/fullcalendar/fullcalendar-scheduler/archive/v1.1.0.zip",
          "type": "zip"
        },
        "source": {
          "url": "https://github.com/fullcalendar/fullcalendar-scheduler.git",
          "type": "git",
          "reference": "tags/v1.1.0"
        },
        "require": {
          "components/jquery": ">=1.8.0",
          "moment/moment": ">=2.5.0",
          "fullcalendar/fullcalendar": ">=2.5.0"
        }
      }
    }
  \],
  "require": {
    "fullcalendar/scheduler": "1.1.\*",
  }
}
