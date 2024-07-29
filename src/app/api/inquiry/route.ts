import { connect } from "@/app/dbConfig";
import Inquiry from "@/app/models/inquiryModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const inquiry = await Inquiry.find();
    return NextResponse.json(inquiry, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const data = await request.json();
    const inquiry = new Inquiry(data);
    const res = await inquiry.save();
    return NextResponse.json(res, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
