// api/app.js
const express = require('express');
const categoryRoute = require('./routes/categoryRoute');

// Crea una instancia de la aplicación express
const app = express();
const port = 3000;

// Usa la ruta de categoría cuando se accede a /api/category
app.use('/api/category', categoryRoute);

// Escucha en el puerto 3000 y muestra un mensaje en la consola
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
