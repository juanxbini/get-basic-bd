// api/routes/categoryRoute.js
const express = require('express');
const CategoryController = require('../controllers/categoryController');

// Crea una instancia del enrutador express
const router = express.Router();

// Crea una instancia del controlador de categorías
const categoryController = new CategoryController();

// Define una ruta para obtener todas las categorías (GET /)
router.get('/', async (req, res) => {
  try {
    // Invoca el método getAllCategories del controlador de categorías
    await categoryController.getAllCategories(req, res);
  } catch (error) {
    // Captura y maneja cualquier error que pueda ocurrir durante el proceso
    console.error('Error en la ruta para obtener todas las categorías:', error);

    // Devuelve un código de estado 500 y un mensaje de error en formato JSON
    res.status(500).json({ error: 'Error al obtener todas las categorías' });
  }
});

// Exporta el enrutador para que pueda ser utilizado en otras partes del código
module.exports = router;
