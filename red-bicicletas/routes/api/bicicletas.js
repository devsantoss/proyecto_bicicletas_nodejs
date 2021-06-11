var express = require('express');
var router = express.Router();
var bicicleta_controller = require('../../controllers/api/bicicletaControllerAPI');

router.get('/', bicicleta_controller.bicicleta_list);
router.post('/create', bicicleta_controller.bicicleta_create);
router.delete('/delete', bicicleta_controller.bicicleta_delete);
router.put('/update', bicicleta_controller.bicicleta_update);
module.exports = router;