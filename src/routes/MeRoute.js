const express = require('express');
const router = express.Router();
const { storeCourse } = require('../controllers/MeController.js');

router.get('/stored/courses', storeCourse);

module.exports = router;
