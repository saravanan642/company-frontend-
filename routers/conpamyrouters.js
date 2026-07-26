const express = require('express');
const router = express.Router();
const createcompany = require("../Controller/company")

router.post("/create-form",createcompany)


module.exports =router;