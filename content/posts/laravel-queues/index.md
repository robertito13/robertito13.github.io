---
title: "Laravel Queues"
date: "2020-11-02"
---
# Intro

En los años 40 las computadoras eran grandes sistemas electrónicos con pseudo sistemas operativos monousuarios y monotarea. Eran controladas por un operador que se encargaba de organizar e ingresar las tareas(jobs) de los usuarios para su procesamiento.

Como el tiempo de ejecución de cada trabajo era variable tener un operador esperando a que terminaran antes de ingresar el siguiente resultaba poco eficiente. Además para poder aprovechar al máximo la capacidad de cómputo hubiese sido necesario tener operadores disponibles a toda hora haciendo más caro aún todo el sistema.

Para subsanar esto los trabajos se organizaban en lotes(batchs) que se ejecutan secuencialmente permitiendo que la carga y la ejecución fueran asincrónicas. Mientras el operador preparaba el siguiente conjunto de tarjetas o cintas la computadora procesaba el anterior.

![](http://faculty.salina.k-state.edu/tim/ossg/_images/batch.png)

En la siguiente década, de la mano de IBM, llegaron los primeros mainframes y sistemas operativos con capacidades similares a las que tienen hoy en día. Entre ellas estaba la multitarea. La capacidad de dividir los recursos de forma transparente entre diversas tareas.

La multitarea se basó en la implementación del sistema de interrupciones que permite detener la ejecución de un programa y ceder a otro el uso del procesador. Con esta nueva capacidad fue necesario implementar un sistema que permitiera organizar las tareas: las colas de planificación de procesos(process scheduling queues).

![](https://www.tutorialspoint.com/operating_system/images/queuing_diagram.jpg)

Y para organizar dentro de cada cola los trabajos el orden de ejecución se diseñaron distintos algoritmos. Entre ellos, dos que son relevantes para este tema, son: FCFS (first come first serve, primero venido primero servido) y Priority Scheduling (planificación por prioridades).

Como sus nombres lo indican, con FCFS se ejecutan primero las tareas que primero llegaron a la cola y con Priority Scheduling se establece un sistema de prioridades donde aquellas tareas con mayor prioridad se ejecuta primero y entre aquellas con la misma se utiliza FCFS.

Durante de la década del 60 con el desarrollo de las primeras redes de datos y el sistema de conmutación de paquetes apareció el problema de organizar el procesamiento de los paquetes de datos recibidos de forma de no perder ninguno pero sin tener que sobredimensionar el hardware para mantener los costos accesibles. La solución fue una implementación de un planificador de paquetes basado en colas.

Este mismo concepto fue aplicado durante las décadas siguientes en multitud de sistemas. Entre ellos el email, el wifi, VoIP, DNS, TCP/IP, étc. Obviamente con tantas implementaciones dando vueltas, muchas propietarias y de uso interno, el ecosistema era bastante caótico y no se dieron muchos avances significativos en la teoría ni implementaciones novedosas.

Recién a mediados de los 90 Sun Microsystems desarrolló el Java Message Services con la idea de crear una capa intermedia que proveyera una interfaz genérica y unificada que permitiera desacoplar la lógica del canal de comunicación del mensaje.

La API de JMS ofrece soporte a dos modelos distintos: punto a punto y publicación / suscripción.

En el primero los mensajes son enviados desde el productor directamente a consumidores específicos que mantienen colas de mensajes entrantes. Múltiples productores pueden generar mensajes con la confianza que cada mensaje va a ser recibido por el consumidor objetivo y va a ser mantenido encolado hasta que se procese o expire. En caso de no estar disponible el consumidor, el mensaje se almacena en una cola intermedia hasta que pueda ser entregado.

Con el modelo de publicación / suscripción, los mensajes pasan son publicados en un determinado tópico donde serán almacenados hasta que sean consumidos o expiren. Los suscriptores se suscriben a los distintos tópicos de los que quieren recibir mensajes y cuando hayan nuevos los van recibiendo.

Este último modelo, a diferencia del primero, no asegura la recepción del mensaje. Si no hay suscriptores para el tópico, el mensaje puede no ser recibido nunca. Como contraparte, un mensaje también puede ser recibido por múltiples suscriptores.

En los siguientes años fueron apareciendo las implementaciones modernas de los sistemas de cola de mensajes; MQTT(pub/sub) y AMQP(p2p y pub/sub). Ambas implementaciones, llamadas protocolos de mensajería se basan en la utilización de un broker de mensajería que es el encargado de enrutar los mensajes y realizar las demás tareas accesorias.

# Laravel

En Laravel el concepto de colas está fuertemente asociado a la ejecución de tareas de forma asincrónica cómo método para traspasar esta limitación inherente de PHP.

Soporta tres formas de trabajo, sincrónica, mediante la conexión con un broker externo y utilizando una BBDD o Redis.

- Sincrónica, se ejecuta en el momento. Útil únicamente para desarrollo.
- Broker externo, RabbitMQ, SQS, étc.
- BBDD, utilizando una tabla como cola de mensajes

La arquitectura es de productor - consumidor y utilizan el algorítmo FIFO para elegir qué procesar primero. Se van generando tareas (llamadas jobs) en distintas partes de la app y esas tareas van siendo ejecutadas por un consumidor (llamado worker).

Es importante tener en cuenta que todo el sistema está pensado para que se ejecute Laravel (o por lo menos PHP) en ámbos extremos. A diferencia de otros el contenido del mensaje está predefinido y los parámetros se pasan codificados con serialize.

```
{
    "job":"Illuminate\\\\Queue\\\\CallQueuedHandler@call",
    "data":{
        "command":"O:29:\\"Acme\\Jobs\\FooJob\\":4:{s:11:\\"fooBar\\";s:7:\\"abc-123\\";s:5:\\"queue\\";N;s:5:\\"delay\\";N;s:6:\\"\\u0000*\\u0000job\\";N;}"
    }
}
```

## Setup

Primero hay que editar la configuración para indicar que utilice la BBDD en vez de sync que es el que viene por defecto.
Si no modificamos el nombre de la conexión de la BBDD alcanza con setear la variable de entorno QUEUE_CONNECTION. En caso de haber hecho algún cambio o necesitar personalizar alguna otra configuración, como por ejemplo el nombre de la tabla, tendremos que editar el archivo *queue.php* en la carpeta *config*.

Además, trae un comando de artisan que crea una migración con todo lo necesario para usarlas:

```
php artisan queue:table
php artisan migrate
```

## Jobs

Los jobs, son las tareas que se van a despachar para su ejecución. Para crearlas, artisan también tiene un comando:

```
php artisan make:job ProccessMessage
```

Que genera un archivo en la carpeta Jobs con un contenido parecido a este:

```
class ProcessMessage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $message;

    public function __construct(Message $message)
    {
        $this->message = $message;
    }

    public function handle()
    {
        // $this->message
        // Process message...
    }
}
```

Como vemos, el Job es una clase con un constructor y un método. El constructor nos va a permitir pasarle información la información necesaria para la realización de la tarea.

Además, nos proporciona la función handle que es la que se va a ejecutar cuando se procese el job. Es importante recordar que esta función no se va a correr durante la petición HTTP que la inició sino desde consola en el entorno donde esté corriendo el worker que es el encargado de procesar los jobs.

Cualquier dato del navegador o la sesión que podamos necesitar hay que pasarlo al momento de hacer la carga del Job en la cola o dispatch.

Por ejemplo, para poder acceder al usuario que está logeado para enviarle un mensaje de bienvenida tendríamos que configurar nuestro job de la siguiente forma:
```
class WelcomeUser implements ShouldQueue
    public $user;

    public function __construct(User $user)
    {
        $this->user= $user;
    }
    
    public function handle()
    {
        Mail::to($user->email)
            ->send(new EmailMessage($user));
    }
}
```

Y hacer el dispatch así:
```
WelcomeUser::dispatch(Auth::user());
```

Lo genera en nuestra tabla de jobs una entrada con la información:

![](https://www.nigmacode.com/laravel-filemanager/files/1/Imagenes/queue_bd.PNG)

## Dispatch

Como vimos el dispatch del job se realiza a través de la función homónima que se hereda en todos los jobs que generemos.

Además de permitirnos pasarle información nos permite demorar la ejecución de la tarea o indicarle un horario para que se realice a través de la función delay:

```
WelcomeUser::dispatch(Auth::user())->delay(today()->addDay());
```

De esta forma utilizando la librería Carbon que viene con Laravel, recuperamos al fecha y le agregamos un día haciendo que la tarea se ejecute después de las doce de la noche de hoy.

Si estamos trabajando con múltiples colas, por ejemplo tenemos una cola de alta y otra de baja prioridad, mediante el método onQueue podemos asignar a cual vamos a enviar el Job:

```
WelcomeUser::dispatch(Auth::user())->onQueue('high');
```

El envío de trabajos sueltos no son las únicas formas de dispatch que soporta Laravel, también, se pueden envíar jobs encadenados, una serie de jobs que se ejecutan uno después de otro mientras los anteriores hayan sido exitosos y batch jobs, un mismo job que se ejecuta múltiples veces con diferentes parámetros y de forma independiente entre si.

Por último, si la acción que tenemos que realizar es sencilla y no amerita crear un Job para manejarla, mediante el helper dispatch también podemos encolar closures:

```
$user = Auth::user();
dispatch(function() use ($user) {
    Mail::to($user->email)->send(new EmailMessage($user));
})->catch(function (Throwable $e) {
    Log::warning('No se pudo enviar el mail de bienvenida');
});
```

## Worker

Los worker son el consumidor del sistema de colas. Se encargan de ejecutar las tareas y se inician mediante un comando de artisan:

```
php artisan queue:work
```

Como mencionamos antes, para poder correrlos necesitamos tener Laravel instalado en el equipo, idealmente, una copia de la misma app que va a generar los jobs.

Si estamos hablando de Docker, serían dos contenedores creados a partir de la misma imagen. Uno se encargaría de servir las peticiones HTTP y el otro de correr los jobs.

Una consideración importante es que los Worker no tienen manejo de excepciones incorporado, cuando se produce un error el worker se detiene y es necesario reiniciarlo para que siga procesando jobs. Desde Laravel recomiendan usar la app supervisor pero cualquier sistema es válido.

Utilizando el comando anterior el worker va a escuchar en la cola por defecto, si nos interesa asignarle una específica podemos utilizando el parámetro queue:

```
php artisan queue:work --queue=custom
```

En uno de los ejemplos anteriores mencionamos el uso de dos colas con diferentes prioridades, mediante este parámetro también podemos hacer es "asignación de prioridades":

```
php artisan queue:work --queue=high,low
```

Las colas que se enumeran primero toman prioridad por sobre las que les siguen permitiendonos utilizar un solo worker para el procesamiento.

## Cierre

Si bien el sistema de colas de Laravel no es tan potente como las implementaciones en sistemas programados en lenguajes que soportan procesamiento asíncrono, nos da la posibilidad de delegar o demorar todas las tareas que no necesiten resolución inmediata permitiendo continuar de forma inmediata con el procesamiento de las peticiones HTTP.

Como es parte del código hace un tiempo hoy en día se integra de forma completamente transparente con todas las demas funcionalidades del framework como el File Storage, el Task Scheduling o el Mail lo que lo hace la mejor opción si ya estamos trabajando con Laravel.