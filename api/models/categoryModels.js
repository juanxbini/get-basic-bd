// api/models/categoryModel.js
const connection = require('../../config/db');

class Category {
  // Método para serializar una categoría
  serializeCategory(category) {
    console.log('model:', category);
    return {
      id: category.id,
      nombre: category.nombre,
    };
  }

  // Método para obtener todas las categorías desde la base de datos
  listCategories() {
    // Retorna una promesa para manejar la asincronía de la consulta SQL
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM categorias;';

      // Realiza la consulta SQL y maneja el resultado
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

// Exporta la clase para que pueda ser utilizada en otras partes del código
module.exports = Category;
