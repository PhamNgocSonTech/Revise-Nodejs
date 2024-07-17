const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-arrow-up-wide-short',
            desc: 'fa-solid fa-arrow-down-short-wide',
        };
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];

        const addressHref = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`
        );

        const output = `<a href="${addressHref}"><i class="${icon}" style="color: #58c9b9;"></i></a>`;
        return new Handlebars.SafeString(output);
    },
};
