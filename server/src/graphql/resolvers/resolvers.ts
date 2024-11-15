import { getAllUsers, getUserById } from "../../controllers/User.js";
import { getAllCourses, getAllLectures, getCourseById, getCoursesOfUser } from "../../controllers/course.js";

type sampleUsertype = {
    name:string;
    age:number;
    gender:string;
} 
const myUsers: sampleUsertype[] = [];

export const graphQLResolver = {

    Mutation: {
      newUser:(parent: any, {name,age,gender}: sampleUsertype) => {
        // console.log(args);
        myUsers.push({name,age,gender})
        return "User added Successfully"
      }
    },

    Query: {
      // hello: () => "Hello World",
      // wow: () => 40,
      users: getAllUsers,
      courses: getAllCourses,
      course: getCourseById,
      lectures: getAllLectures,
      sampleUsers: () => myUsers
    },
    Course: {
      instructor: async(course: any) => {
        return await getUserById(course.instructor)
      }
    },
    User:{
      courses: getCoursesOfUser
    },
    Lecture: {
      videoUrl: (lecture: any) => ({
          _480p: lecture.videoUrl["_480p"],
          _720p: lecture.videoUrl["_720p"],
          _1080p: lecture.videoUrl["_1080p"],
      })
    }
  }