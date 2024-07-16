const CourseModel = require('../models/Course');

const storeCourse = async (req, res) => {
    try {
        const countCourse = await CourseModel.countDocumentsWithDeleted({
            deleted: true,
        });
        const courseQuery = await CourseModel.find({}).lean();
        // if (req.query.hasOwnProperties('_sort')) {
        //     courseQuery = courseQuery.sort({
        //         [req.query.column]: req.query.types,
        //     });
        // }
        res.render('me/store-course', { courses: courseQuery, countCourse });
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
