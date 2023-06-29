const express = require('express');
const router = express.Router();
const destinoController = require('../controllers/destinoController')

router.post('/', destinoController.crearDestino);
router.get('/', destinoController.obtenerDestinos);
router.delete('/:id', destinoController.eliminarDestino);
router.get('/:id', destinoController.obtenerDestino);
router.put('/:id', destinoController.actualizarDestino)

module.exports = router;