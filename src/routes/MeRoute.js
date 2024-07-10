const express = require('express');
const router = express.Router();
const { storeCourse, trashCourse } = require('../controllers/MeController.js');

router.get('/stored/courses', storeCourse);
router.get('/trash/courses', trashCourse);

module.exports = router;
