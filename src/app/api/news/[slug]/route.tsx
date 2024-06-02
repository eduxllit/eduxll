import { connect } from "@/app/dbConfig";
import News from "@/app/models/newsModels";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";


connect()

export async function GET(request: Request,{ params }: { params: { slug: string } }) {
    const slug = params.slug as string;

    try {
        const news  = await News.findOne({slug})
        if(!news){
            return NextResponse.json({error: 'No News Found'}, {status: 500})
        }
        return NextResponse.json(news, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }


  export async function PATCH(request:NextRequest, { params }: { params: { slug: string } }){
    const slug = params.slug as string;
    const body = await request.json();    
    try {
        const updatedNews = await News.findOneAndUpdate(
            {slug:slug},
            {
                title: body?.title,
                link: body?.link,
                customCategory: body?.customCategory,
            },
            {new: true})

    return NextResponse.json(updatedNews, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

  }


  export async function DELETE (request:NextRequest, { params }: { params: { slug: string } }){
    const _id = params.slug as string;
    try {
        const deletedNews = await News.findOneAndDelete({_id:_id})
        console.log(deletedNews)
        if(!deletedNews){
            return NextResponse.json({error: 'No News Found'}, {status: 500})
        }
        return NextResponse.json(deletedNews, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
  }