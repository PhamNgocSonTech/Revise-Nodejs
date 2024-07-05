const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: 'String',
        maxLength: 255,
    },

    des: {
        type: 'String',
        maxLength: 500,
    },

    img: {
        type: 'String',
        maxLength: 255,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Course', CourseSchema);
