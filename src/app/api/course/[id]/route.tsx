import Courses from "@/app/models/coursesModels";
import { NextResponse } from "next/server";



export async function GET(request: Request,{ params }: { params: { id: string } }) {
    const id = params.id as string;
    try {
        const blog  = await Courses.findById(id)
        if(!blog){
            return NextResponse.json({error: 'No Blog Found'}, {status: 500})
        }
        return NextResponse.json(blog, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }




export async function PATCH(request: Request,{ params }: { params: { id: string } }) {
    const id = params.id as string;
    const data = await request.json()
    try {
        const course  = await Courses.findByIdAndUpdate(id, data, { new: true })
           
        return NextResponse.json(course, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }


  export async function DELETE (request: Request,{ params }: { params: { id: string } }){
    const id = params.id as string;

    console.log('salman khan id', id)
    try {
        const deletedCourse = await Courses.findByIdAndDelete(id)
        if(!deletedCourse){
            return NextResponse.json({error: 'No Course Found'}, {status: 500})
        }
        return NextResponse.json(deletedCourse, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }