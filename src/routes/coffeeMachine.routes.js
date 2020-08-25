const express = require('express');
const router = express.Router();
const coffeeMachineController = require('../controllers/coffeeMachineController')
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(coffeeMachineController.getMachines))

module.exports = router;