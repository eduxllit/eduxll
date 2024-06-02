import { connect } from "@/app/dbConfig";
import User from "@/app/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect()




export const POST = async (request:NextRequest)=>{
    try {
        const reqBody = await request.json()
        const {email} = reqBody
        const user = await User.findOne({email})

        if (user && user.isVerfied) {
            // generate a pasword reset string and send it to the user
            const resetToken = Math.floor(1000 + Math.random() * 9000)  
        }







    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


