const setopt = require("../Models/setoptSchema")
const UserModel = require("../Models/User")

const sendOTP = async (req, res) => {
    try {

        const { email } = req.body

        if (!email) {
            return res.json({ success: false, message: "Email are required please provide" })
        }

        const userEmail = email.toLowerCase();

        const isUSer = await UserModel.findOne({ email : userEmail })

        if (!isUSer) {
            return res.json({ success: false, message: "Alrady account exitx please sigin" })
        }

        const otp = Math.floor(100000 + Math.random() * 900000);

        const expiry = new Date(Date.now() + 5 * 60 * 1000)

        if (!expiry) {
            return res.json({ success: false, message: "OTP expired. Please request a new OTP." })
        }

        const updateOtp = await setopt.updateOne(
            { email },
            {
                $set: { otp, expiresAt: expiry }
            },
            { upsert: true }
        )

        if (!updateOtp) {
            return res.json({ success: false, message: "Failed to update OTP. Please try again." })
        }
        return res.json({ success: true, messgae: " OTP send successfully ",save })


    }
    catch (err) {
        console.log("Error in send otp")
    }
}
module.exports = sendOTP;