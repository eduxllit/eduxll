import { connect } from "@/app/dbConfig";
import FreeMaster from "@/app/models/freeMaster";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const freeMaterClass = await FreeMaster.find();
    return NextResponse.json(freeMaterClass, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
