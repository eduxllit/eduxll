import { connect } from "@/app/dbConfig";
import FreeCourse from "@/app/models/freeCourse";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const freecourse = await FreeCourse.find();
    return NextResponse.json(freecourse, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, response: NextResponse) {
  try {
    const { field, url, courseId } = await request.json();

    const update = { [field]: url };
    const course = await FreeCourse.findByIdAndUpdate(courseId, update, {
      new: true,
    });

    return NextResponse.json({
      message: "Free course update successfully",
      success: true,
      course,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
