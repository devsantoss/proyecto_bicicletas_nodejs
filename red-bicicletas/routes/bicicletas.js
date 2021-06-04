var express = require('express');
var router = express.Router();
var bicicleta_controller = require('../controllers/bicicleta');

router.get('/', bicicleta_controller.bicicleta_list);

router.get('/create', bicicleta_controller.bicicleta_create_get);
router.post('/create', bicicleta_controller.bicicleta_create_post);

router.get('/:id/update', bicicleta_controller.bicicleta_update_get);
router.post('/:id/update', bicicleta_controller.bicicleta_update_post);
router.post('/:id/delete', bicicleta_controller.bicicleta_delete_post);
//Falta el metodo mostrar

module.exports = router;