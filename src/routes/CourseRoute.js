const express = require('express');
const router = express.Router();
const { News } = require('../controllers/NewsController');
const { getDetailCourse } = require('../controllers/CourseController');

router.get('/:slug', getDetailCourse);
router.get('/news', News);

module.exports = router;
