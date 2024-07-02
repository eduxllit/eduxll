import Otp from "@/app/models/otpModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { otp, mobile } = await request.json();

    const otpRes = await Otp.findOne({ mobileNo: mobile, otp: otp });
    if (otpRes) {
      // delete otp from db
      await Otp.deleteOne({ mobileNo: mobile, otp: otp });
      return NextResponse.json(
        { message: "OTP verified successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
