const express = require('express');
const router = express.Router();
const { fetchData } = require('../controllers/apiController');

router.get('/', fetchData);

module.exports = router;
