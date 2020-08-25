const express = require('express');
const router = express.Router();
const coffeePodController = require('../controllers/coffeePodController')
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(coffeePodController.getPods))

module.exports = router;