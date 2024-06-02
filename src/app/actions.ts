'use server'

import { connect } from "./dbConfig";
import Courses from "./models/coursesModels";




export const updateCourseFields = async (courseId: string, fields: any) => {
    connect();
    const course = Courses.findByIdAndUpdate(courseId, fields, { new: true });
    return course;
}

export const createCourse = async (data:any)=>{
    connect();
    const course = new Courses(data)
    const newCourse = await course.save()
    return newCourse
}