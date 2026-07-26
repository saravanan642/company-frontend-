const express = require("express");
const router = express.Router();
const cors = require("cors");
const companyRouter = require("./conpamyrouters");


router.use(companyRouter);


module.exports = router;