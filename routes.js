const express = require('express');
const router = express.Router();
const crudController = require('./controllers/crud');

router.get('/tareas', crudController.obtenerTareasList); // 
router.get('/tareas/:id', crudController.obtenerTareaPorId);
router.post('/create', crudController.crearTarea); 
router.put('/tareas/:id/update', crudController.updateFechaModificacion);
router.put('/tareas/:id/updateEliminar', crudController.eliminarFecha);

module.exports = router;