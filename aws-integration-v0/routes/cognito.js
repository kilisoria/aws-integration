const express = require('express');
const router = express.Router();

const cognitoController = require('../controllers/cognito.js');

router.route('/').get(cognitoController.ping);

module.exports = router;