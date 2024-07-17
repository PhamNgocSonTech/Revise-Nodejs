const CourseModel = require('../models/Course');

const storeCourse = async (req, res, next) => {
    try {
        let courses = await CourseModel.find().lean();
        if (req.query.hasOwnProperty('_sort')) {
            courses = await CourseModel.find()
                .lean()
                .sort({ [req.query.column]: req.query.type });
        }
        const countCourse = await CourseModel.countDocumentsWithDeleted({
            deleted: true,
        });
        res.render('me/store-course', { courses, countCourse });
    } catch (error) {
        next(error);
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
