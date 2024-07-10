const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

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

// Add Plugins
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', CourseSchema);
