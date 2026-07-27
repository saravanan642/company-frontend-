const companySchema = require("../Models/companymodels")

const createdata = async (req, res) => {
    try {
        const { companyName, companyCode, logo, favicon, domain, website, email, mobile, address, primaryColor, secondaryColor, plan, status, } = req.body;
        if (!companyName || !companyCode || !logo || !favicon || !domain || !website || !mobile || !address || !primaryColor || !secondaryColor ) {
            return res.json({ success: false, message: "All fileds are require " });
        }
        const Existing = await companySchema.findOne({ email, mobile, address })

        if (Existing) {
            return res.json({ success: false, message: "Company already registered" });
        }

        const save = await companySchema.create({
            companyName,
            companyCode,
            logo,
            favicon,
            domain,
            website,
            email,
            mobile,
            address,
            primaryColor,
            secondaryColor,
            plan,
            status
        });
        return res.json({success: true , message :"Account created successfully",save})

    } catch (err) {
        console.log(err.message)
        console.log("Erro in the server ")
    }
};   

const fetchcompanyData = async (req, res) => {
    try {

        const companydata = await companySchema.find({})
        if (!companydata || companydata.length === 0) {
            return res.json({ success: false, message: "Company data not found" })
        }

        return res.json({
            success: true,
            message: "Company data is successfully fetched",
            data: companydata
        })

    }
    catch (err) {
        console.log(err)
        console.log("Error in the fetch data")
    }
}

module.exports = {
    createdata,
    fetchcompanyData
}