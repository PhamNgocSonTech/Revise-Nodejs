const Homepage = (req, res) => {
    res.render('home');
};

const Search = (req, res) => {
    res.render('search');
};

module.exports = {
    Homepage,
    Search,
};
