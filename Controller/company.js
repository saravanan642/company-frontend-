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

        if (!deletelist) {
            return res.json({
                success: false,
                message: "Data not found"
            });
        }
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
        const { data } = req.body;

        if (data && data.Id) {

            const existingData = await companySchema.findOne({
                Id: data.Id
            });

            if (existingData) {

                const updated = await companySchema.updateOne(
                    { Id: data.Id },
                    {
                        $set: {
                            Name: data.Name,
                            Contact: data.Contact,
                            Email: data.Email
                        }
                    }
                );

                if (updated) {
                    return res.json({
                        success: true,
                        message: "Data updated successfully"
                    });
                } else {
                    return res.json({
                        success: false,
                        message: "No updates were made"
                    });
                }

            } else {
                return res.json({
                    success: false,
                    message: "Data not found"
                });
            }

        } else {
            return res.json({
                success: false,
                message: "Invalid data provided"
            });
        }

    } catch (err) {
        console.log(err);

        return res.json({
            success: false,
            message: "Error in the update data list"
        });
    }
};
module.exports = {
    createdata,
    fetchcompanyData,
    Deleteform, 
    updatedata
}