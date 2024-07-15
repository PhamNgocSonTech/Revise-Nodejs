const isAdmin = (req, res, next) => {
    if (!req.query.isAdmin) {
        return res.status(403).json({
            msg: 'Access Denied',
        });
    }

    return next();
};

module.exports = {
    isAdmin,
};
