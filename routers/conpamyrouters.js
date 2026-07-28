const express = require('express');
const router = express.Router();
const {createdata, fetchcompanyData,Deleteform, updatedata } = require("../Controller/company")

router.post("/create-form",createdata)
router.get("/fetch-companydata",fetchcompanyData)
router.delete("/delete-datalist/:id", Deleteform);
router.put("/update-list/:id", updatedata)
module.exports =router;