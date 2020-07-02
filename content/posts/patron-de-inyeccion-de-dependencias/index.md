---
title: "Patrón de Inyección de Dependencias"
date: "2018-08-10"
---

La idea detrás del patrón de inyección de dependencias es lograr una mayor separación de las responsabilidades de nuestro código cambiando la forma en que se manejan las dependencias entre objetos.

Un forma común de establecer esta dependencia es codificar dentro de una clase, normalmente en el constructor, la creación de la instancia de un objeto que es necesario para su funcionamiento.

 
public class Dependencia { ... }

public class Clase {
	private Dependencia depend;
	
	public Clase() {
		depend = new Dependencia();
	}
	
	public void funcion() {
		depend.doSomething();
	}
}

class Program {
	public static void main(String \[ \] args) {
		Clase miclase = new Clase();
		miclase.funcion();
	}
}

Este tipo de dependencia suele ser denominado fuerte porque una clase depende directamente de la otra para funcionar. Cualquier cambio en la clase de la que se depende obliga a la realización de cambios en la clase dependiente generando, en la práctica, una subordinación entre una y otra.

Como podemos suponer, al ser dos clases diferentes, las responsabilidades de cada una son distintas y no deberían estar tan ligadas porque dificulta el mantenimiento, la extensión del código y la escalabilidad del software. Aquí es donde entra la inyección de dependencias.

Para lograr una mayor separación de responsabilidades, este patrón recomienda la utilización de interfaces o clases abstractas para establecer las dependencias y, por lo tanto, el uso de objetos ya creados en vez de instanciarlos internamente.

En la práctica, cada clase debe indicar el "tipo" de objeto que necesita para trabajar y es otra parte del código la que se debe encargar de implementar la clase en función de la interfaz, crearlo y pasarlo al objeto.

 
public interface iDependencia { ... }

public class MiDependencia : iDependencia { ... }

public class Clase {
	private iDependencia Depend;
	
	public Clase(iDependencia d) {
		Depend = d;
	}
	
	public void funcion() {
		Depend.doSomething();
	}
}

class Program {
	static void main() {
		MiDependencia dependencia1 = new MiDependencia();
		Clase miclase = new Clase(dependencia1);
		miclase.funcion();
	}
}

Como se puede observar ya no existe una relación directa entre ambas clases. Nuestra clase indica que necesita un objeto creado a partir de una clase que implemente la interfaz pero no específica qué clase. Este tipo de separación permite cambiar rápidamente la clase que pasamos como dependencia e incluso trabajar con varias clases.

Un ejemplo muy extendido de este tipo de diseño es el que utilizan los frameworks que se comunican con bases de datos. Estos establecen una interfaz con este fin y una o dos clases que la implementen para distintas BBDD dando la libertad al programador de crear una nueva si necesita trabajar con otra o instanciarlas varias veces si necesita más de una conexión.

Como toda solución tiene sus pros y sus cons. Como otra ventaja aparte de las mencionadas, al estar más modularizado el código, es más fácil realizar test unitarios.

Como contra la necesidad de que el lenguaje soporte interfaces o clases abstractas y la necesidad de escribir más código para implementar el diseño. También, a consecuencia de agregar un grado de separación entre la dependencia y la clase, se puede dificultar la depuración en caso de surgir errores de integración.
