---
title: "Patrón de Carga Diferida: Value Holder"
date: "2018-08-08"
---

El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las características de un programa son usadas durante su ejecución o para distribuir los tiempos de carga, cuando estos son muy grandes, durante la ejecución para poder mejorar los tiempos de respuesta al iniciar.

Hay cuatro formas comunes de implementar la carga diferida: inicialización diferida, proxy virtual, fantasma y value holder.

##### Value Holder

Esta técnica implica la utilización de un objeto cuyo tiempo de carga es menor y que reemplaza al objeto original hasta que sea necesario su carga.

Por ejemplo, la utilización de una imagen con pocos colores y de muy  pequeño tamaño (un logo en escala de grises) que se utiliza en los sitios webs con muchas fotos en vez de la foto original hasta que esta es cargada.

Es necesario que el value holder esté optimizado al máximo, si termina siendo menos o igual de eficiente que cargar el objeto original el método pierde sentido.

<img class="lazy" src="placeholder-image.jpg" data-src="image-to-lazy-load-1x.jpg" data-srcset="image-to-lazy-load-2x.jpg 2x, image-to-lazy-load-1x.jpg 1x" alt="I'm an image!">

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = \[\].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});

Fuente:  [Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)
