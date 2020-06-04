---
title: "Insertar o actualizar en MySQL"
date: "2018-07-05"
---

Al momento de agregar una nueva fila a una tabla en MySQL nos podemos encontrar que nos devuelve el error 1062: **Duplicate entry <valor> for key <columna>**, indicándonos que ya existe un registro con ese valor para esa columna. Ya sea porque enviamos un bloque de sentencias y necesitamos que se ejecute completo aunque haya duplicados o porque queremos solucionar con una sentencia la inserción o actualización de un registro, nos encontramos con la necesidad de poder indicarle a MySQL que hacer en estos casos.

Para esto, el motor de BBDD, pone a nuestra disposición, 3 opciones:

#### IGNORE

INSERT IGNORE INTO t1 (a,b,c) VALUES (1,2,3);

A partir de la versión 4.0.1 de MySQL se puede utilizar la clausula _IGNORE_ para indicar que no se tengan en consideración los errores que surjan al intentar insertar el nuevo registro. Dependiendo del error, nos podemos encontrar frente a dos situaciones: un error de inserción (por ej., clave duplicada) con lo que el nuevo registro se descarta silenciosamente o un error de conversión de datos (por ej., pasaje de un string en vez de un integer) en donde el motor fuerza la conversión e inserta el registro.

Una consideración es que desde la versión 5.1.22, aunque el registro sea descartado, las columnas con _AUTO\_INCREMENT_ igualmente aumentaran su índice. Normalmente no nos debería afectar pero es bueno tenerlo en cuenta.

Una vez terminada la ejecución podemos utilizar mysql\_info (en C) o mysqli\_info (en PHP) para determinar la cantidad de registros efectivamente agregados a la tabla.

#### REPLACE

REPLACE INTO t1 (a,b,c) VALUES (1,2,3);

La instrucción _REPLACE_ nos permite indicar al motor de base de datos que si el registro ya existe, lo reemplace por el que indicamos. Es como realizar un _DELETE_ y luego un _INSERT_ en una operación atómica. Al eliminar primero el registro anterior, no podemos utilizar ninguno de los datos almacenados en el mismo. Los campos para los que no especifiquemos valor, tomaran el que se haya indicado como por defecto para la columna al crear la tabla.

A tener en cuenta, como no se actualiza el registro anterior sino que se elimina e inserta uno nuevo, para poder utilizar _REPLACE_ se necesitan permisos de _DELETE_ e _INSERT_ sobre la tabla; las columnas con _AUTO\_INCREMENT_ tomarán valores nuevos y cualquier instrucción cascada será ejecutada.

Además, como ocurre con cualquier operación de _INSERT_ o _DELETE_, el índice de la tabla tiene que ser reconstruido haciendo de esta una operación extremadamente costosa.

La cantidad de registros afectados por la sentencia _REPLACE_ que nos informa el motor de base de datos equivale a la suma de las bajas y altas que se realizaron. Es decir, cuenta 1 por registro si no existía y 2 si lo reemplazó.

#### ON DUPLICATE KEY

INSERT INTO t1 (a, b, c) VALUES (1, 2, 3)
  ON DUPLICATE KEY UPDATE c = c + 1;

Desde su versión 4.1, MySQL permite utilizar la clausula _ON DUPLICATE KEY UPDATE_ en las sentencias _INSERT_ permitiéndonos indicar al motor que cuando se encuentre que ya existe un registro con esa clave o valor para una columna declarada como _UNIQUE_ en vez de abortar la operación, haga un _UPDATE_.

Al igual que en cualquier UPDATE, en caso de tener claves compuestas, la selección para la actualización se hará de la forma más restrictiva posible (por. ej, si _UNIQUE(a, b)_, se usará _WHERE a=? AND b=?_ y no un operador disyuntivo). Igualmente, si se actualiza un registro preexistente, los índices de las columnas AUTO\_INCREMENT, no variarán.

En caso de que los valores del nuevo registro sean de gran tamaño o queramos evitar enviar dos veces el mismo valor, se puede utilizar la instrucción SET de la siguiente forma:

SET @a = 1, @b = 2, @c = 3;

INSERT INTO t2 (a, b, c)
  VALUES (@a, @b, @c)
  ON DUPLICATE KEY UPDATE b=@b, c=@c;

La cantidad de registros afectados por la sentencia _INSERT_ que nos informa el motor de base de datos equivale a la suma de las actualizaciones y altas que se realizaron. Es decir, cuenta 1 por registro si existía y 2 si hubo que darlo de alta.
