import { Course } from "../models/courseModel.js"
import { Lecture } from "../models/lectureModel.js";
import { User } from "../models/userModel.js";

export const getAllCourses = async() => {
    const courses = await Course.find();
    // console.log(courses);
    return courses;
}

export const getCourseById = async(parent: any, arg: {id: string}) => {
    const course = await Course.findById(arg.id);
    // console.log(course?.instructor)
    return course;
}

export const getAllLectures = async() => {
    const lectures = await Lecture.find();
    return lectures;
}

export const getCoursesOfUser = async(user: any) => {
    const courses = await Course.find({
        instructor: user._id
    })

    return courses;
}