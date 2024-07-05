const CourseModel = require('../models/Course');

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
        const data = await CourseModel.find();
        res.render('home', { courses: data });
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
