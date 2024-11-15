import mongoose from "mongoose";
import { Lecture } from "../models/lectureModel.js";

const dummyData = [{
    title: "Introduction to JavaScript",
    description: "This lecture covers the basics of JavaScript, including variables, data types, and functions.",
    position: 1,
    resources: [
        { title: "JavaScript Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { title: "Variables and Data Types", url: "https://example.com/variables-and-data-types.pdf" }
    ],
    videoUrl: {
        _480p: "https://example.com/videos/intro-js-480p.mp4",
        _720p: "https://example.com/videos/intro-js-720p.mp4",
        _1080p: "https://example.com/videos/intro-js-1080p.mp4"
    },
    duration: 45, // Duration in minutes
    course: "615f39c5a4e3b27a4a8b4567",  // Dummy ObjectId for the course (replace with actual course ID)
    instructor: "615f39e5b4f4b27a4a8b4568",  // Dummy ObjectId for the instructor (replace with actual user ID)
    isPublished: true,
    isPreview: true
}];

export const insertDummyLectures = async () => {
    try {
        await Lecture.insertMany(dummyData);
        console.log("Dummy users added successfully!");
    } catch (error) {
        console.error("Error adding dummy users:", error);
    } finally {
        mongoose.connection.close();
    }
};