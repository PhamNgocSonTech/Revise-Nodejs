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

//

const editCourse = async (req, res) => {
    try {
        const course = await CourseModel.findById(req.params.id).lean();
        res.render('courses/edit', { course: course });
    } catch (error) {
        res.status(404).json(error);
    }
};

//PUT
const updateCourse = async (req, res) => {
    try {
        // const course = await CourseModel.findById(req.params.id).lean();
        // res.render('courses/edit', { course: course });
        await CourseModel.updateOne({ _id: req.params.id }, req.body);
        res.redirect('/me/stored/courses');
    } catch (error) {
        res.status(404).json(error);
    }
};

// POST
const storeCourse = (req, res) => {
    try {
        const dataImg = req.body;
        dataImg.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new CourseModel(dataImg);
        course.save();
        res.redirect('/');
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = {
    getDetailCourse,
    createCourse,
    editCourse,
    storeCourse,
    updateCourse,
};
