# Proyecto de Gestión de Categorías con Node.js, Express y MySQL

![Node.js](https://img.shields.io/badge/Node.js-v14.17.4-green)
![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-blue)
![MySQL](https://img.shields.io/badge/MySQL-v8.0.26-orange)

## Descripción

Este proyecto es una aplicación simple que explora la estructura básica de las peticiones a una base de datos utilizando Node.js, Express y MySQL. Ideal para aquellos que desean entender los fundamentos del desarrollo web y la interacción con bases de datos.

## Instrucciones de Configuración

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-repo.git`
2. Instala las dependencias: `npm install`
3. Configura la conexión a la base de datos en `config/db.js`
4. Ejecuta la aplicación: `node api/app.js`

## Estructura del Proyecto

- `api/controllers`: Contiene los controladores de la aplicación.
- `api/models`: Contiene los modelos que interactúan con la base de datos.
- `api/routes`: Contiene las rutas definidas para la aplicación.
- `config`: Contiene la configuración de la base de datos.

## Demostración de Uso

Para obtener todas las categorías, realiza una solicitud GET a la siguiente ruta:

```bash
curl http://localhost:3000/api/category/
