// api/controllers/categoryController.js
const Category = require('../models/categoryModel');

class CategoryController {
  // Método para obtener todas las categorías
  async getAllCategories(req, res) {
    try {
      // Crea una instancia del modelo de categoría
      const categoryModel = new Category();

      // Obtiene todas las categorías utilizando el modelo
      const categories = await categoryModel.listCategories();

      // Serializa cada categoría y guarda los resultados en serializedCategory
      const serializedCategory = categories.map((category) => {
        return categoryModel.serializeCategory(category);
      });

      // Imprime los IDs de las categorías en la consola
      serializedCategory.forEach((category) => {
        console.log(category.id);
      });

      // Establece el encabezado Content-Type a 'application/json'
      res.setHeader('Content-Type', 'application/json');

      // Envía la respuesta al cliente con las categorías serializadas en formato JSON
      res.send(JSON.stringify(serializedCategory));

    } catch (error) {
      // Captura y maneja cualquier error que pueda ocurrir durante el proceso
      console.error('Error al obtener las categorías:', error);

      // Devuelve un código de estado 500 y un mensaje de error en formato JSON
      res.status(500).json({ error: 'Error al obtener las categorías' });
    }
  }
}

// Exporta la clase para que pueda ser utilizada en otras partes del código
module.exports = CategoryController;
