const CourseModel = require('../models/Course');

const storeCourse = async (req, res) => {
    try {
        const courses = await CourseModel.find({}).lean();
        res.render('me/store-course', { courses });
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = { storeCourse };
