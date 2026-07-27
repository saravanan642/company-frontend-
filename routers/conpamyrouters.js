const express = require('express');
const router = express.Router();
const {createdata, fetchcompanyData} = require("../Controller/company")

router.post("/create-form",createdata)
router.get("/fetch-companydata",fetchcompanyData)

module.exports =router;