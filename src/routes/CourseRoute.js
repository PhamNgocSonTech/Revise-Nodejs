const express = require('express');
const router = express.Router();
const { News } = require('../controllers/NewsController');
const { isAdmin } = require('../middleware/isAdmin');
const {
    getDetailCourse,
    createCourse,
    storeCourse,
    editCourse,
    updateCourse,
    deleteCourse,
    restoreCourse,
    handleFormActions,
    handleFormActionsTrash,
    forceDeleteCourse,
} = require('../controllers/CourseController');

router.get('/create', createCourse);
router.post('/store', storeCourse);
router.post('/handle-form-action', handleFormActions);
router.post('/handle-form-action-trash', handleFormActionsTrash);
router.get('/:id/edit', editCourse);
router.put('/:id', updateCourse);
router.patch('/:id/restore', restoreCourse);
// router.delete('/:id/force-delete', forceDeleteCourse);
router.delete('/:id', deleteCourse);
router.get('/:slug', getDetailCourse);
// router.get('/news', News);

module.exports = router;
