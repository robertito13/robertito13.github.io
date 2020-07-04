---
title: "JWT: The right way"
date: "2020-07-03"
---

## Introducción
JWT es un formato estandarizado para representar claims, información sobre identidad o privilegios, con el objetivo de facilitar el intercambio mediante canales con limitantes al tamaño como son las HTTP Authorization headers, las URI query parameters o los POST parameters.

La información se representa mediante objetos JSON, opcionalmente firmados(JWS) o encriptados(JWE), y se codifica mediante el standard base64Url.

JWT se planteó inicialmente como alternativa a SAML buscando reducir la verbosidad y complejidad asociadas a este por estar basado en XML y SOAP.

## Estructura
- base64UrlEncode vs base64

## Casos de Uso
Al igual que otros sistemas de autorización basados en tokens, la implementación de JWT en una aplicación, permite que la misma sea stateless. Al ser el cliente quien envía, adjunta con la petición, información sobre su identidad y los privilegios que tiene no es necesario que se lleve un control de sesiones desde el servidor.

Esto último lleva a que muchas implementaciones lo usen como una suerte de client based sessions, funcionalidad que excede el scope del standard y que trae aparejados nuevos problemas.

## Pros
- Stateless
- Estandarización / JSON
- Separación servicios de autenticación de la app

## Cons
- Únicamente validez de origen y datos, no seguridad
- No se pueden invalidar

## Seguridad
- Replay
    - Vencimiento
- CSRF
    - LocalStorage
- Leaks
- MiTM
  - Algoritmo
  - Origen


Fuentes:
- https://auth0.com/blog/json-web-token-signing-algorithms-overview/
- https://es.wikipedia.org/wiki/Firma_digital#Bas%C3%A1ndonos_en_criptograf%C3%ADa_de_clave_asim%C3%A9trica
- https://platzi.com/blog/introduccion-json-web-tokens/
- https://tools.ietf.org/html/rfc7519
- https://jwt.io/introduction/
- https://medium.com/datadriveninvestor/authentication-vs-authorization-716fea914d55
- https://blog.angular-university.io/angular-jwt/
- https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07