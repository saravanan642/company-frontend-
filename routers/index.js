const express = require("express");
const router = express.Router();
const cors = require("cors");

const companyRouter = require("./conpamyrouters");
const sendOtpRouter = require("./sendOtprouter");

router.use(companyRouter);
router.use(sendOtpRouter);


module.exports = router;