const CourseModel = require('../models/Course');

const storeCourse = async (req, res) => {
    try {
        res.json(res.locals._sort);
        const countCourse = await CourseModel.countDocumentsWithDeleted({
            deleted: true,
        });
        const courses = await CourseModel.find({}).lean();
        res.render('me/store-course', { courses, countCourse });
    } catch (error) {
        res.status(404).json(error);
    }
};

const trashCourse = async (req, res) => {
    try {
        const courses = await CourseModel.findWithDeleted({
            deleted: true,
        }).lean();
        res.render('me/trash-course', { courses });
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = { storeCourse, trashCourse };
