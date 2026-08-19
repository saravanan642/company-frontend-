const express = require('express');
const sendOTP = require('../Controller/setoptcontroller');
const router = express.Router();

router.post("/sendOtp",sendOTP)

module.exports =router;