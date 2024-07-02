import Otp from "@/app/models/otpModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { mobileNo } = await request.json();
    console.log(mobileNo);

    // generate random 5 digit otp for user
    const otp = Math.floor(100000 + Math.random() * 900000);

    const otpRes = new Otp({
      otp: otp,
      mobileNo: mobileNo,
    });
    const res = await otpRes.save();

    const response = await fetch(
      `${process.env.NEXT_OTP_URL}/SendSMS?user=${process.env.NEXT_OTP_USER}&password=${process.env.NEXT_OTP_PASSWORD}&senderid=${process.env.NEXT_OTP_SENDER_ID}&channel=Trans&DCS=0&flashsms=0&number=${mobileNo}&text=Your login verification code is ${otp} valid till 2 minutes. eduXLL  https://eduxll.com/`
    );

    if (res) {
      // send otp to user mobile number
      return NextResponse.json({
        status: 200,
        message: "OTP sent successfully",
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
