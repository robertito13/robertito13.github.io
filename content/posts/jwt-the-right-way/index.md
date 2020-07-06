---
title: "JWT: The right way"
date: "2020-07-03"
---

## Introducción

JWT es un formato estandarizado para representar claims, información sobre identidad o privilegios, con el objetivo de facilitar el intercambio mediante canales con limitantes al tamaño como son las HTTP Authorization headers, las URI query parameters o los POST parameters.

JWT se planteó inicialmente como alternativa a SAML buscando reducir la verbosidad y complejidad asociadas a este por estar basado en XML y SOAP.

La información se representa mediante objetos JSON, que pueden estar firmados([JWS](https://tools.ietf.org/html/rfc7515)) o encriptados([JWE](https://tools.ietf.org/html/rfc7516)), y se codifica mediante *base64Url*.

De las dos implementaciones posibles de JWT la más extendida es JWS al punto de que muchas veces no hace diferencia entre las dos especificaciones.

El resto del artículo va a estar centrado en JWS y, en otro artículo, profundizaré en JWE.

## Estructura

Los tokens JWS se dividen en tres partes:

- Header
- Payload
- Signature

Las dos primeras son objetos JSON y la última un hash[^1] de las dos anteriores. Para facilitar el transporte del token las tres partes están codificadas utilizando *Base64url* y unidas mediante un punto quedando una cadena con el siguiente formato:

```
hhhhhhhhh.ppppppppp.sssssssss
```

La **cabecera** se compone generalmente de dos campos:

- alg: Indica cuál de los dos algorítmos soportados fue utilizado para generar la firma. Un listado de las posibilidades está definida en el standard [JWA](https://tools.ietf.org/html/rfc7518#section-3).
- typ: Este parámetro es opcional respecto de la implementación pero en caso de estar definido se recomienda que tenga como valor 'JWT'.

El **payload** contiene los claims del token y existen tres tipos: registrados, privados y públicos. Los primeros son nombres que estan reservados por la especificación mientras que los últimos son los definidos por la aplicación.

Los siguientes campos son los reservados por la especifición:

- iss: Issuer, opcional. Identifica al emisor del token. Puede ser un URI o un string case-sensitive.
- sub: Subject, opcional. Identifica el objetivo del token (nombre de usuario, recurso, étc). Puede ser un URI o un string case-sensitive.
- aud: Audience, opcional. Identifica para quién fue emitido el token. Puede ser un URI o un string case-sensitive.
- exp: Expiration Time, opcional. Fecha/tiempo de vencimiento del token. Numérico en segundos desde el 1970-01-01T00:00:00Z UTC.
- nbf: Not Before, opcional. Fecha/tiempo de inicio de la validez del token. Numérico en segundos desde el 1970-01-01T00:00:00Z UTC.
- iat: Issued At, opcional. Fecha/timepo de emisión del token. Numérico en segundos desde el 1970-01-01T00:00:00Z UTC.
- jti: JWT ID, opcional. Identificador global único del token. String case-sensitive.

Los claims públicos son aquellos registrados en el [IANA JSON Web Token Registry](https://www.iana.org/assignments/jwt/jwt.xhtml) por especificaciones basadas en JWT como OpenID.

Por último, los privados son los internos o acordados entre partes y no se encuentran registrados o reservados.

La **firma** es un hash generado de la unión del contenido de la cabecera y el payload. Su función es asegurar la integridad de los datos y, en caso de utilizar unp asimétrico también permite validar el origen del token.

Opcionalmente, si no nos interesa firmar los datos, el campo *alg* se puede setear con el valor *none* que indica que no se utilizó ningún algoritmo y dejar en blanco la firma:

```
hhhhhhhhh.ppppppppp.
```

Por especificación las implementaciones de JWT únicamente estan obligadas a soportar *none* y *HMAC*. Se recomienda además que proveean soporte para *RSASSA-PKCS1-v1_5* y *ECDSA* usando una curva *P-256*. En todos los casos el resultado debe ser codificado con *SHA-256*.

Los demás algorítmos son opcionales respecto del standard.

Como se menciono antes, el algorítmo elegido para codificar los datos es el [*Base64url*](https://base64.guru/standards/base64url), una variante del conocido [*Base64*](https://base64.guru/standards/main) que reemplaza los caracteres '+' por '-' y '/' por '_', resultando así en una salida del algorítmo que no utliza caracteres considerados significativos en las URL.


## Casos de Uso
De forma amplia la idea es permitir el intercambio de información **no sensible**(por lo menos con JWS) entre partes de la que haga falta poder validar la integridad y, opcionalmente, el origen. 

El subconjunto más común de esto es la delimitación de los permisos de un cliente tanto hacia lo interno como para con otros servicios ([SSO](https://en.wikipedia.org/wiki/Single_sign-on)).

Una vez que el usario está autenticado, las siguientes peticiones utilizaran un token en vez de transmitir las credenciales o almacenarlas en una sesión en el servidor.

## Pros y cons

Si bien se ya se pudieron observar más arriba, de forma sistematizada, los beneficios de utilizar JWT son, principalmente:

- Tamaño reducido (comparado con SAML), como siempre, menos es mejor en lo que respecta a la cantidad de información que hay que trasmitir.
- Estandarización / JSON, pocos formatos de datos son tan ampliamente soportados en la actualidad.
- Separación servicios de autenticación de la app, no es necesario que el servicio de autenticación conviva con el la app o servicios a los que, valga la redundancia, sirve.
- Asegura integridad de los datos por especificación. La firma nos permite estar seguro que la información que recibimos es la enviada por emisor.
- Puede servir para identificar el origen. Mediante la utilización de algorítmos asimétricos nos permite saber quién emitió el token.
- Al no estar encriptado se simplifica la depuración en desarrollo.
- Son tremendamente populares, podemos encontrar documentación, artículos e implementaciones de casi cualquier caso de uso o problema.

Con respecto a las contras de utilizar JWT se puede observar que:

- Si bien es más chico que SAML, todavía puede resultar demasiado verboso para algunas aplicaciones más que nada dependiendo del payload.
- Una vez emitido el token no se puede invalidar.
- Al ser el token el que identifica al cliente y no el servidor el que individualiza las conexiones perdemos la posiblidad de generar notificaciones push.
- La especificación no establece un algorítmo de firma fijo sino que la selección del mismo queda a cargo del mismo token lo que abre la puerta a diferentes vulnerabilidades[^2][^3].
- El uso de una firma puede generar una falsa sensación de seguridad con respecto a la información trasmitida.
- Como corolario de las dos anteriores, es necesario tener conocimientos de crypto para saber los trade-offs de utilizar uno u otro algorítmo.
- Son tremendamente populares, podemos encontrar un montón de información errónea validada por otro montón de fuentes igual de erróneas.

## Seguridad
Como se mencionó antes, JWT tiene algunos problemas de seguridad más que nada derivados de la falta de especificidad de la especificación.

Como JWT no tiene definido un sistema de renovación de tokens y pedirle al usuario que se re autentique constantemente lleva a tener una carrera laboral muy corta, es común que los token se emitan con un TTL muy grande o incluso sin fecha de expiración.

El problema surge en que por especificación, un token que no está vencido o no tiene fecha de expiración es válido y mientras lo sea se puede reutilizar tantas veces como se quiera.

Sumado a que tampoco existen mecanismos para invalidar los tokens, un token comprometido es algo que, en principio, no hay forma de manejar.

Por último, otro problema muy común es la falta de seguridad al almacenar el token. Es muy común ver la recomendación de utilizar el [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) de los navegadores como lugar para guardar los JWT sin considerar lo que eso [implica](https://michael-coates.blogspot.com/2010/07/html5-local-storage-and-xss.html).

## Documentación extra
- [JSON Web Token Best Current Practices (IETF)](https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07)
- [JSON Web Token Cheat Sheet for Java (OWASP)](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)
- [JSON Web Tokens (Auth0)](https://auth0.com/docs/tokens/concepts/jwts)



## Fuentes
- https://auth0.com/blog/json-web-token-signing-algorithms-overview/
- https://es.wikipedia.org/wiki/Firma_digital#Bas%C3%A1ndonos_en_criptograf%C3%ADa_de_clave_asim%C3%A9trica
- https://platzi.com/blog/introduccion-json-web-tokens/
- https://tools.ietf.org/html/rfc7519
- https://jwt.io/introduction/
- https://medium.com/datadriveninvestor/authentication-vs-authorization-716fea914d55
- https://blog.angular-university.io/angular-jwt/
- https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07

[^1]: También puede tomar el valor 'none' como se ve más adelante.
[^2]: https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/
[^3]: https://insomniasec.com/blog/auth0-jwt-validation-bypass