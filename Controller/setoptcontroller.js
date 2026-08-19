const setopt = require("../Models/setoptSchema")

const sendOTP = async (req, res) => {
    try {

        const { email } = req.body

        if (!email) {
            return res.json({ success: false, message: "Email are required please provide" })
        }

        const isUSer = await UserModel.findOne({ email })

        if (!isUSer) {
            return res.json({ success: false, message: "Alrady account exitx please sigin" })
        } else {
            email.toLowerCase() == Email.toLowerCase()
            return res.json({ success: false, message: "Company already registered" });
        }
        const otp = Math.floor(100000 + Math.random() * 900000);

        const expiry = new Date(Date.now() + 5 * 60 * 1000)

        if (!expiry) {
            return res.json({ success: false, message: "OTP expired. Please request a new OTP." })
        }
        return res.json({success : true , message : " "})





    }
    catch (err) {
        console.log("Error in send otp")
    }
}