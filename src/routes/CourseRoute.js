const express = require('express');
const router = express.Router();
const { News } = require('../controllers/NewsController');
const {
    getDetailCourse,
    createCourse,
    storeCourse,
    editCourse,
    updateCourse,
} = require('../controllers/CourseController');

router.post('/store', storeCourse);
router.get('/create', createCourse);
router.get('/:slug', getDetailCourse);
router.get('/:id/edit', editCourse);
router.put('/:id', updateCourse);
// router.get('/news', News);

module.exports = router;
