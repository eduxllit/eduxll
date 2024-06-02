import { connect } from "@/app/dbConfig";
import Web from "@/app/models/webinar";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";


connect()

export async function GET(request: Request,{ params }: { params: { slug: string } }) {
    const slug = params.slug as string;

    try {
        const webinar  = await Web.findOne({slug})
        if(!webinar){
            return NextResponse.json({error: 'No Webinar Found'}, {status: 500})
        }
        return NextResponse.json(webinar, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }


  export async function PATCH(request:NextRequest, { params }: { params: { slug: string } }){
    const slug = params.slug as string;
    const body = await request.json();    
    try {
        const updatedWebinar = await Web.findOneAndUpdate(
            {slug:slug},
            {

                mtitle: body?.mtitle,
                mdescription: body?.mdescription,
                ptitle: body?.ptitle,
                name: body?.name,
                description: body?.description,
                ylink: body?.ylink,
                customCategory: body?.customCategory,
                content: body?.content,
                date: body?.date,
                time: body?.time,
            },
            {new: true})

    return NextResponse.json(updatedWebinar, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

  }


  export async function DELETE (request:NextRequest, { params }: { params: { slug: string } }){
    const _id = params.slug as string;
    try {
        const deletedNews = await Web.findOneAndDelete({_id:_id})
        console.log(deletedNews)
        if(!deletedNews){
            return NextResponse.json({error: 'No News Found'}, {status: 500})
        }
        return NextResponse.json(deletedNews, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }