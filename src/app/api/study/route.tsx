import { connect } from "@/app/dbConfig";
import Study from "../../models/studyAbroad";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("category");

    let study;

    if (query) {
      const fetchedStudy = await Study.find({
        customCategory: {
          $elemMatch: {
            value: { $regex: new RegExp(query, "i") },
          },
        },
      });
      study = fetchedStudy;
    } else {
      const fetchedStudy = await Study.find();
      study = fetchedStudy;
    }
    return NextResponse.json(study, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();
    // need to pass slug also in the request body to generate slug for the course title and save it in the database as well

    const slug = generateSlug(body.metaTitle);
    body.slug = slug;

    const course = new Study(body);
    const newCourse = await course.save();
    return NextResponse.json({
      message: "Course created successfully",
      success: true,
      newCourse,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, response: NextResponse) {
  try {
    const { field, url, courseId } = await request.json();

    const update = { [field]: url };
    const course = await Study.findByIdAndUpdate(courseId, update, {
      new: true,
    });

    return NextResponse.json({
      message: "Study update successfully",
      success: true,
      course,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function generateSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}
