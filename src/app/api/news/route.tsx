import { connect } from "@/app/dbConfig";
import News from "@/app/models/newsModels";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const news = await News.find();
    return NextResponse.json(news, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
