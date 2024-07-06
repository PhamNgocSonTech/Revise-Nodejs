const CourseModel = require('../models/Course');
const { mutipleMongooseToObject } = require('../utils/mongoose');

const getCourse = async (req, res) => {
    try {
        const data = await CourseModel.find();
        return res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error);
    }
};

const Homepage = async (req, res) => {
    try {
        const courses = await CourseModel.find().lean();
        // const dataCourses = courses.map((course) => course.toObject());
        res.render('home', { courses });
        // return res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error);
    }
};

const Search = (req, res) => {
    res.render('search');
};

module.exports = {
    Homepage,
    Search,
};
