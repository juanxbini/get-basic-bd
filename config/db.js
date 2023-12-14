// config/db.js
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu-usuario',
  password: 'tu-contraseña',
  database: 'tu-base-de-datos',
});

// Intenta establecer la conexión y muestra un mensaje en la consola
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Exporta la conexión para que pueda ser utilizada en otras partes del código
module.exports = connection;
