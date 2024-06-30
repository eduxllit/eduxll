import mongoose, { Schema } from "mongoose";

const OtpSchema = new Schema({
    otp:{
        type: String,
        required: [true, "Please provide a otp"],
    }, 
    mobileNo:{
        type: String,
        required: [true, "Please provide a mobile no"],
    }
}) 


const Otp = mongoose?.models?.otps || mongoose.model("otps", OtpSchema);
export default Otp;