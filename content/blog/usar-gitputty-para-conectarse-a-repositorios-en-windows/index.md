---
title: "Usar Git+PuTTY para conectarse a repositorios en Windows"
date: "2015-12-01"
---

Instalar GIT para Windows - [Descarga](https://git-scm.com/download/win) Instalar PuTTY - [Descarga](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) [](https://git-scm.com/download/win)

**Utilizar PuTTYgen para crear un par de claves** Abrir PuTTYgen, cambiar la cantidad de bits y el tipo de clave si hiciera falta. Hacer click en "Generate". Mover el mouse en el cuadrado vacio hasta que la barra de progreso se llene. Una vez que esté generada la clave se habilitan los botones "Save public key" y "Save private key" que nos permiten guardar, respectivamente, la clave pública y la privada. El nombre se puede elegir libremente, conviene utilizar el mismo. La clave pública no tiene extensión predeterminada pero es práctico utilizar txt para acceder más rápidamente.

Agregar la clave privada a Pageant

Agregar la clave pública al servidor GIT

**Indicar que PuTTY es tu almacén de claves SSH** ...asignando la variable de sistema o usuario GIT\_SSH al ruta de "plink.exe", ubicado en la misma carpeta de PuTTY. En Windows 7, entrar al Panel de Control, Sistema, Configuración avanzada del sistema, Variables de Entorno, en Variables de usuario o del sistema hacer click en Nueva. Usar como nombre GIT\_SSH y como valor la ruta completa a plink, por ejemplo: "C:\\Program Files (x86)\\PuTTY\\plink.exe"
