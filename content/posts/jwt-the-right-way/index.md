---
title: "JWT: The right way"
date: "2020-07-03"
---

## Introducción
¿Qué es JWT? ¿Qué NO es JWT?
Diferencia autenticación y autorización

## Estructura
- base64UrlEncode vs base64

## Casos de Uso
- Autorización
- Intercambio de información entre servicios
- Autenticación

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