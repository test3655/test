'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Export
const test = require('../apps/test');

let router = express.Router();

// Endpoint
router.get('/test',jsonParser, test);
router.post('/test',jsonParser, test);

module.exports = router;