const mongoose = require("mongoose");
const companySchema = new mongoose.Schema(
{
    companyName: {
        type: String,
        required: true,
        trim: true
    },

    companyCode: {
        type: String,
        unique: true,
        uppercase: true
    },

    logo: String,

    favicon: String,

    domain: String,

    website: String,

    email: String,

    mobile: String,

    address: String,

    primaryColor: {
        type: String,
        default: "#2563EB"
    },

    secondaryColor: {
        type: String,
        default: "#1E293B"
    },

    plan: {
        type: String,
        enum: ["Free","Basic","Pro","Enterprise"],
        default: "Basic"
    },

    status: {
        type: Boolean,
        default: true
    },
},
{
    timestamps:true
});
module.exports = mongoose.model("Company", companySchema);