---
title: "Patrón de Carga Diferida: Fantasma"
date: "2018-07-12"
---

El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las características de un programa son usadas durante su ejecución o para distribuir los tiempos de carga, cuando estos son muy grandes, durante la ejecución para poder mejorar los tiempos de respuesta al iniciar.

Hay cuatro formas comunes de implementar la carga diferida: inicialización diferida, proxy virtual, fantasma y value holder.

##### Ghost

Esta técnica implica la creación del recurso pero con una cantidad mínima de información y diferir el resto de la carga hasta que sea necesario.

Por ejemplo, al presentar un listado inicializamos el objeto con la información mínima para mostrar (por ejemplo un título o una descripción) y al hacer click en un ítem recién cargamos el resto del objeto para poder acceder a la información completa.

Algunas consideraciones que es necesario tener en cuenta al utilizar este patrón son:

- Como la carga se realiza en dos tramos, puede que cuando hagamos la carga inicial el objeto esté disponible y cuando querramos obtener el resto de la información no.
- Para que tenga sentido usar este patrón la carga mínima tiene que ser considerablemente más chica que la carga total del recurso sino el overhead por realizar dos accesos puede terminar haciendo todo el proceso menos eficiente.

function Documento(id) {
  var self = this;

  $.get('/get\_preview/' + id, function (response) {
    self.title = response.title;
    self.path = response.path;
  });

  function mostrar\_documento() {
    $.get('/get/' + id, function (response) {
      self.data = response.data;
      console.log(self.data);
    });
  }
}

var documentos = \[
  new Documento(1),
  new Documento(3),
  new Documento(4),
\];

documentos.forEach( function(e) {
  $('body').append( function(html, index) {
    var $item = $('<p><strong>' + e.id + ': ' + e.title + '</strong>');
    $item.click( this.mostrar\_documento() );
  });
});
