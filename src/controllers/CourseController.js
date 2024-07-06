const CourseModel = require('../models/Course');

// [GET] /courses/:slug
const getDetailCourse = async (req, res) => {
    try {
        const course = await CourseModel.findOne({
            slug: req.params.slug,
        }).lean();
        res.render('courses/show', { course: course });
        // return res.status(200).json(course);
    } catch (error) {
        res.status(404).json(error);
    }
};

// GET
const createCourse = (req, res) => {
    res.render('courses/create');
};

// POST
const storeCourse = (req, res) => {
    res.send('store course');
};

module.exports = { getDetailCourse, createCourse, storeCourse };
