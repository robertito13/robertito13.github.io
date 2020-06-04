---
title: "Notificaciones de Windows en WSL"
date: "2018-08-31"
---

Con todos los avances que ha tenido el [Windows Subsystem fro Linux](https://docs.microsoft.com/en-us/windows/wsl/about), una de las funcionalidades que todavía sigue pendiente de implementar es el soporte para notificaciones. Esta característica que podría haberse considerado meramente estética desde la aparición de los [background jobs](https://virtualizationreview.com/articles/2018/06/04/background-jobs-in-windows-subsystem-for-linux.aspx) pasó a ser una necesidad.

A menos que nos podamos permitir tener varias terminales abiertas en pantalla para monitorear cualquier proceso ejecutado en segundo plano o de forma automática, es necesario que utilicemos un sistema de información centralizado y Windows ya nos provee sus notificaciones.

El principal problema con esta idea es que no existe ningún punto de contacto entre Windows y el D-Bus.  Dada esta limitación es necesario buscar otro enfoque. La mejor opción hasta ahora viene siendo aprovechar la [interoperabilidad](https://docs.microsoft.com/en-us/windows/wsl/interop)\[footnote\]¿Hay alguna traducción mejor para este término?\[/footnote\] entre Windows y nuestro sabor de Linux.

Para esto, necesitamos instalar [BurnToast](https://github.com/Windos/BurntToast), un módulo de PowerShell que nos permite lanzar desde la línea de comandos notificaciones de Windows.

PS > Install-Module -Name BurntToast

Una vez instalado, desde probamos el funcionamiento:

PS > New-BurntToastNotification -Text "Hi There!"

En caso de que nos de error "porque la ejecución de scripts está deshabilitada en este sistema". Es necesario que [habilitemos la ejecución](http://bytesentreteclas.com/habilitar-ejecucion-de-scripts-powershell-en-windows-10/), por lo menos, para módulos firmados:

PS > Set-ExecutionPolicy RemoteSigned

Ahora que estamos seguros que todo está listo para emitir notificaciones desde PowerShell, es hora de que hagamos pruebas desde WSL.

WSL > powershell.exe -command "New-BurntToastNotification -Text 'Hi There!'"

![](images/chrome_2018-08-31_15-36-12.png)

Finalmente, ya estamos listos para enviar notificaciones a Windows desde WSL. Además de poder elegir el texto podemos personalizar otros aspectos de las notificaciones, toda la documentación para esto está en la [página del módulo](https://github.com/Windos/BurntToast).
