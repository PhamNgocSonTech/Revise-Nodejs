const { addIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [
        // Iconify plugin
        addDynamicIconSelectors(),
    ],
};
//
