---
title: "Patrón de Carga Diferida: Proxy Virtual"
date: "2018-07-11"
---

El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las características de un programa son usadas durante su ejecución o para distribuir los tiempos de carga, cuando estos son muy grandes, durante la ejecución para poder mejorar los tiempos de respuesta al iniciar.

Hay cuatro formas comunes de implementar la carga diferida: inicialización diferida, proxy virtual, fantasma y value holder.

##### Proxy virtual

Esta técnica implica la creación de un contenedor con la misma interfaz que el recurso original que carga el mismo cuando se realiza el primer llamado a uno de sus métodos.

Por ejemplo, una galería con cientos de imágenes que crea los objetos que representan todas las imágenes al iniciar el programa pero estos recién leerán la imagen del disco cuando tengan que dibujarla.

Algunas consideraciones que es necesario tener en cuenta al utilizar este patrón son:

- Dependiendo del lenguaje de implementación y el tamaño de la clase puede terminar siendo un código engorroso y repetitivo con un montón de métodos públicos que únicamente llamen al loader.
- La carga del recurso es transparente. A los efectos del resto del programa se hace al momento de crear el objeto.
- Como en cualquier otro método de carga diferida, nos podemos encontrar conque el recurso no existe o no está accesible. Además, si toma mucho tiempo cargarlo, la ejecución del programa se puede ver interrumpida.

public class Image {

  public Image(filename) {
    /\* Ahora cargaría la imagen desde el disco \*/
  }
  
  public void draw() { /\*\*\*/ }
}

public class ImageProxy {
  private String filename;
  private Image image;

  public ImageProxy( filename ) {
    this.filename = filename;
  }

  public void draw() {
    if (this->image == null) {
      this.image = new Image(this.filename)
    }

    this.image.draw();
  }
}
