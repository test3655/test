'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Export
const registro = require('../apps/registro');

let router = express.Router();

// Endpoint
router.get('/test',jsonParser, registro);
router.post('/test',jsonParser, registro);

module.exports = router;