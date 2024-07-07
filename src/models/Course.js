const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const CourseSchema = new Schema(
    {
        name: {
            type: String,
            maxLength: 100,
            required: true,
        },

        desc: {
            type: String,
            maxLength: 500,
            required: true,
        },

        img: {
            type: String,
        },

        videoId: {
            type: String,
            maxLength: 20,
            required: true,
        },

        level: {
            type: String,
            default: 'Not Require',
        },

        slug: {
            type: String,
            slug: 'name',
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Course', CourseSchema);
