import { connect } from '@/app/dbConfig'
import Blog from '@/app/models/blogModels'
import { type } from 'os'
import React from 'react'


const getSingleBlog = async(slug:string)=>{
    connect()
    try {
        const blog = await Blog.findOne({slug}) 
        return blog
    } catch (error) {
        return error
    }
}



const page = async ({params}:any) => {
    const {slug} = params

    const response = await getSingleBlog(slug)
    


  return (
    <div>
        <h1>{response?.title}</h1>
        <p>{response?.content}</p>
        
    </div>
  )
}

export default page