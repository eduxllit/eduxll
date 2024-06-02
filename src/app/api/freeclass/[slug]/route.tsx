import { connect } from "@/app/dbConfig";
import FreeMaster from "@/app/models/freeMaster";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";


connect()

export async function GET(request: Request,{ params }: { params: { slug: string } }) {
    const slug = params.slug as string;

    try {
        const freemaster  = await FreeMaster.findOne({slug})
        if(!freemaster){
            return NextResponse.json({error: 'No Free master Found'}, {status: 500})
        }
        return NextResponse.json(freemaster, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }


  export async function PATCH(request:NextRequest, { params }: { params: { slug: string } }){
    const slug = params.slug as string;
    const body = await request.json();    
    try {
        const updatedFreeMaster = await FreeMaster.findOneAndUpdate(
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

    return NextResponse.json(updatedFreeMaster, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

  }


  export async function DELETE (request:NextRequest, { params }: { params: { slug: string } }){
    const _id = params.slug as string;
    try {
        const deletedNews = await FreeMaster.findOneAndDelete({_id:_id})
        console.log(deletedNews)
        if(!deletedNews){
            return NextResponse.json({error: 'No News Found'}, {status: 500})
        }
        return NextResponse.json(deletedNews, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }