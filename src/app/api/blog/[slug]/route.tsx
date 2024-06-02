import { connect } from "@/app/dbConfig";
import Blog from "@/app/models/blogModels";
import { deleteImageFromFirebase } from "@/app/utils";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";


connect()

export async function GET(request: Request,{ params }: { params: { slug: string } }) {
    const slug = params.slug as string;

    try {
        const blog  = await Blog.findOne({slug})
        if(!blog){
            return NextResponse.json({error: 'No Blog Found'}, {status: 500})
        }
        return NextResponse.json(blog, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }


  export async function PATCH(request:NextRequest, { params }: { params: { slug: string } }){
    const slug = params.slug as string;
    const body = await request.json();    
    try {
        const updatedBlog = await Blog.findOneAndUpdate(
            {slug:slug},
            {
                title: body?.title,
                content: body?.content,
                mtitle: body?.mtitle,
                mdescription: body?.mdescription,
                customCategory: body?.customCategory,
            },
            {new: true})

    return NextResponse.json(updatedBlog, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

  }


  export async function DELETE (request:NextRequest, { params }: { params: { slug: string } }){
    const _id = params.slug as string;
    let imageUrl = ''
    try {
        const blog = await Blog.findOne({_id:_id})
        imageUrl = blog?.featureImage
        const deletedBlog = await Blog.findOneAndDelete({_id:_id})
    
        if(!deletedBlog){
            return NextResponse.json({error: 'No Blog Found'}, {status: 500})
        }
        await deleteImageFromFirebase(imageUrl)
        return NextResponse.json(deletedBlog, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }