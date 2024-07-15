const express = require('express');
const router = express.Router();
const { storeCourse, trashCourse } = require('../controllers/MeController.js');
const { isAdmin } = require('../middleware/isAdmin');

router.get('/stored/courses', storeCourse);
// query = ?isAdmin=true can pass route
router.get('/trash/courses', isAdmin, trashCourse);

module.exports = router;
