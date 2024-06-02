
import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/app/dbConfig";
import User from "../../../../models/userModels"
import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";


connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()

        // get email from cookies from reqyest cookies 
      
        const {otp, email} = reqBody

        

        //check if user already exists
        const user = await User.findOne({email})

        if (user && user.isVerfied) return NextResponse.json({error: "User already verified"}, {status: 400})
        
        if(user && user.isVerfied === false){
            const isOtpMatch = user.verifyToken === otp
            if(isOtpMatch){
                await User.updateOne({email:email}, {isVerfied: true, verifyToken: ''})
            } else{
                return NextResponse.json({error: "Invalid OTP"}, {status: 400})
            }
        
        }

        // //hash password
        // const salt = await bcryptjs.genSalt(10)
        // const hashedPassword = await bcryptjs.hash(password, salt)

        // const newUser = new User({
        //     name,
        //     username:email,
        //     email,
        //     password: hashedPassword, 
        //     mobile,
        //     verifyToken: Math.floor(1000 + Math.random() * 9000)
        // })

        // const savedUser = await newUser.save()
       

        //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User Verified successfully",
            success: true,
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}