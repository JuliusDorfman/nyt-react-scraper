const router = require("express").Router();
const articleRoutes = require("./nytAPI.js");

router.use("/articles", articleRoutes);

module.exports = router;
