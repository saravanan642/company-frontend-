const express = require('express');
const router = express.Router();
const createcompany = require("../Controller/company")

router.post("/create-companydataes",createcompany)


module.exports =router;