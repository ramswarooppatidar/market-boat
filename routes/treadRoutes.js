const express = require('express');
const { trade } = require('../controllers/treadingController');

const router = express.Router();

router.get('/', trade);

module.exports = router;
