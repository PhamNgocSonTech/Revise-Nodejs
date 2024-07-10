const express = require('express');
const router = express.Router();
const { News } = require('../controllers/NewsController');
const {
    getDetailCourse,
    createCourse,
    storeCourse,
    editCourse,
    updateCourse,
    deleteCourse,
    restoreCourse,
} = require('../controllers/CourseController');

router.get('/create', createCourse);
router.post('/store', storeCourse);
router.get('/:id/edit', editCourse);
router.put('/:id', updateCourse);
router.patch('/:id/restore', restoreCourse);
router.delete('/:id', deleteCourse);
router.get('/:slug', getDetailCourse);
// router.get('/news', News);

module.exports = router;
