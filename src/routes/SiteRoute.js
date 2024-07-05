const express = require('express');
const router = express.Router();
const { Homepage, Search } = require('../controllers/SiteController');
const { getCourse } = require('../controllers/CourseController');

router.get('/', Homepage);
router.get('/search', Search);
router.get('/getCourse', getCourse);

module.exports = router;
