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
        const { name, desc, videoId, level } = req.body;
        // await CourseModel.updateOne({ _id: req.params.id }, req.body);
        // res.redirect('/me/stored/courses');
        // const course = await CourseModel.findById(req.params.id);
        const dataCourse = {
            name,
            desc,
            videoId,
            level,
            img: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        };
        const course = await CourseModel.findByIdAndUpdate(
            req.params.id,
            dataCourse
        );
        await course.save();
        res.redirect('/me/stored/courses');
    } catch (error) {
        res.status(404).json(error);
    }
};

// DELETE
const deleteCourse = async (req, res) => {
    try {
        await CourseModel.delete({ _id: req.params.id });
        res.redirect('back');
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

//PATCH
const restoreCourse = async (req, res) => {
    try {
        await CourseModel.restore({ _id: req.params.id });
        res.redirect('back');
    } catch (error) {
        res.status(404).json(error);
    }
};

const handleFormActions = async (req, res) => {
    switch (req.body.formAction) {
        case 'Delete':
            await CourseModel.delete({ _id: { $in: req.body.courseIds } });
            res.redirect('back');
            break;
        default:
            res.json({ msg: 'Invalid action' });
    }
};

const handleFormActionsTrash = async (req, res) => {
    switch (req.body.formAction) {
        case 'Restore':
            await CourseModel.restore({ _id: { $in: req.body.courseIds } });
            res.redirect('back');
            break;
        case 'Force Delete':
            await CourseModel.deleteMany({ _id: { $in: req.body.courseIds } });
            res.redirect('back');
            break;
        default:
            res.json({ msg: 'Invalid action' });
    }
};

// const forceDeleteCourse = async (req, res) => {
//     // switch (req.body.formAction) {
//     //     case 'Delete':
//     //         await CourseModel.delete({ _id: { $in: req.body.courseIds } });
//     //         res.redirect('back');
//     //         break;
//     //     default:
//     //         res.json({ msg: 'Invalid action' });
//     // }

//     res.json(req.body)
// }

module.exports = {
    getDetailCourse,
    createCourse,
    editCourse,
    storeCourse,
    updateCourse,
    deleteCourse,
    restoreCourse,
    handleFormActions,
    handleFormActionsTrash,
    // forceDeleteCourse,
};
