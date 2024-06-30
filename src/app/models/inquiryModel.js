import mongoose, { Schema } from "mongoose";



const InquirySchema = new Schema({
    courseName: {
        type: String,
        required: [true, "Please provide a course name"],
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
    },
    phone: {
        type : String, 
        required : [true, "Please provide mobile no"]
    }, 
    work_experience:{
        type: String, 
        required : [true, "Please provide work experience"]
    }

})


const Inquiry = mongoose?.models?.inquires || mongoose.model("inquires", InquirySchema);
export default Inquiry;