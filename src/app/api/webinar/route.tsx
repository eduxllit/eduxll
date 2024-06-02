import { connect } from "@/app/dbConfig";
import Web from "@/app/models/webinar";
import Webinar from "@/app/models/webinar";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const webinar = await Web.find();
    return NextResponse.json(webinar, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
