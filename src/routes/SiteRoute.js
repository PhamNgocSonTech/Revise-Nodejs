const express = require("express");
const router = express.Router();
const { Homepage, Search } = require("../controllers/SiteController");

router.get("/", Homepage);
router.get("/search", Search);

module.exports = router;
