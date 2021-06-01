var express = require('express');
var router = express.Router();
var bicicleta_controller = require('../../controllers/api/bicicletaControllerAPI');

router.get('/', bicicleta_controller.bicicleta_list);

module.exports = router;