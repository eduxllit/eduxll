
import { connect } from "@/app/dbConfig";
import Blog from "@/app/models/blogModels";
import { NextRequest, NextResponse } from "next/server";

connect()
export async function GET(request:NextRequest, response:NextResponse) {
    try {
        const blogs = await Blog.find()
        return NextResponse.json(blogs, {status: 200})

        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}

export async function PUT(request: NextRequest, response: NextResponse) {
    try {
      const { field, url, courseId } = await request.json();
  
      const update = { [field]: url };
      const course = await Blog.findByIdAndUpdate(courseId, update, {
        new: true,
      });
  
      return NextResponse.json({
        message: "Blog update successfully",
        success: true,
        course,
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }