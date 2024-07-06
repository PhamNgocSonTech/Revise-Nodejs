const express = require('express');
const router = express.Router();
const { News } = require('../controllers/NewsController');
const {
    getDetailCourse,
    createCourse,
    storeCourse,
} = require('../controllers/CourseController');

router.get('/create', createCourse);
router.post('/store', storeCourse);
router.get('/:slug', getDetailCourse);
router.get('/news', News);

module.exports = router;
