const express = require('express');
const router = express.Router();
const { News } = require('../controllers/NewsController');

router.get('/news', News);

module.exports = router;
