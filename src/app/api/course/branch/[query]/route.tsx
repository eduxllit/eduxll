import Courses from "@/app/models/coursesModels";
import { NextResponse } from "next/server";







export async function GET(request: Request,{ params }: { params: { query: string } }) {
    const query = params.query as string;
    try {
        const courses = await Courses.find({
            courseBranch: {
              $elemMatch: {
                value: { $regex: new RegExp(query, 'i') } 
              }
            }
          });  
        return NextResponse.json(courses, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }