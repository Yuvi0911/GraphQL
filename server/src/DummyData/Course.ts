import mongoose from "mongoose";
import { Course } from "../models/courseModel.js";

// Dummy course data
const dummyCourses = [
    {
        title: "Introduction to C#",
        description: "Learn the fundamentals of C#, the programming language of the web.",
        instructor: "6732f7e327fb3374a666dfce", // Example instructor ID; replace with an actual user ID
        ratingsAverage: 4,
        ratingsQuantity: 150,
        price: 199,
        category: "Programming",
        subCategory: "C#",
        level: "Beginner",
        language: "English",
        whatYouWillLearn: ["Variables", "Functions", "Loops", "DOM Manipulation"],
        requirements: ["Basic computer knowledge", "Willingness to learn"],
        targetAudience: ["Beginners", "Aspiring developers"],
        isPublished: true,
        isFree: false,
        isApproved: true,
        isRejected: false,
        isFeatured: true,
        isTrending: true,
        isBestSeller: false,
        coverImage: "https://example.com/images/javascript-course.jpg",
        previewVideo: "https://example.com/videos/preview.mp4",
        students: ["6732f7e327fb3374a666dfcd"] // Example student IDs; replace with actual user IDs
    },
    // {
    //     title: "Advanced CSS Techniques",
    //     description: "Master advanced CSS techniques for responsive and visually appealing web designs.",
    //     instructor: "64fb2b4d1234567890abcdf2", // Example instructor ID; replace with an actual user ID
    //     ratingsAverage: 5,
    //     ratingsQuantity: 200,
    //     price: 299,
    //     category: "Design",
    //     subCategory: "CSS",
    //     level: "Intermediate",
    //     language: "English",
    //     whatYouWillLearn: ["Flexbox", "Grid Layout", "Responsive Design", "CSS Animations"],
    //     requirements: ["Basic CSS knowledge"],
    //     targetAudience: ["Web developers", "Designers"],
    //     isPublished: true,
    //     isFree: false,
    //     isApproved: true,
    //     isRejected: false,
    //     isFeatured: false,
    //     isTrending: true,
    //     isBestSeller: true,
    //     coverImage: "https://example.com/images/css-course.jpg",
    //     previewVideo: "https://example.com/videos/preview2.mp4",
    //     students: ["64fb2b4d1234567890abcdf3", "64fb2b4d1234567890abcdf4"] // Example student IDs; replace with actual user IDs
    // }
];

// Function to insert dummy data
export const insertDummyCourses = async () => {
    try {
        await Course.insertMany(dummyCourses);
        console.log("Dummy courses added successfully!");
    } catch (error) {
        console.error("Error adding dummy courses:", error);
    } finally {
        mongoose.connection.close();
    }
};