const companySchema = require("../Models/companymodels")

const createdata = async (req, res) => {
    try {
        const { companyName, companyCode, logo, favicon, domain, website, email, mobile, address, primaryColor, secondaryColor, plan, status, } = req.body;
        if (!companyName || !companyCode || !logo || !favicon || !domain || !website || !email || !mobile || !address || !primaryColor || !secondaryColor || !plan || !status ) {
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
        return res.json({ success: true, message: "Account created successfully", save })

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


const Deleteform = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id){
            return send.json({success : false , message : ""})
        }

        const deletelist = await companySchema.findOne({_id : id});

        if (!deletelist) {
            return res.json({
                success: false,
                message: "Data not found"
            });
        }

        const isDeleteUser = await companySchema.deleteOne({_id : deletelist._id })








        return res.json({
            success: true,
            message: "Company data deleted successfully",
            data: deletelist
        });

    } catch (err) {
        console.log(err);

        return res.json({
            success: false,
            message: "Error deleting company"
        });
    }
};

const updatedata = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id){
            return res.json({success : false , message  : ""})
        }
        return res.json({sucess : true,  message : " "})

        const {email, name , mobile } = req.body
           if(!email || !name || !mobile ){
            return res.json ({success : false, mesage  : ""})
           }
           return res.json({sucess : true, message : ""})
           
        const updatelist = await companySchema.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatelist) {
            return res.json({ success: false, message: "update is not found" });
        }

        return res.json({
            success: true,
            message: "update successfully"
        });

    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            message: "Error in the update data list"
        });
    }
}
module.exports = {
    createdata,
    fetchcompanyData,
    Deleteform, 
    updatedata
}