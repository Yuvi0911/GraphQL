import mongoose from "mongoose";
const { Schema } = mongoose;

// Resource Schema (used as part of the Lecture schema)
const resourceSchema = new Schema({
    title: { type: String, required: true }, // Title of the resource (e.g., document, link)
    url: { type: String, required: true },   // URL or path to the resource
});

// VideoUrl Schema (used as part of the Lecture schema)
const videoUrlSchema = new Schema({
    _480p: { type: String, required: true }, // URL for 480p video
    _720p: { type: String, required: true }, // URL for 720p video
    _1080p: { type: String, required: true }, // URL for 1080p video
});

// Lecture Schema
const lectureSchema = new Schema({
    title: { type: String, required: true }, // Title of the lecture
    description: { type: String, required: true }, // Description of the lecture
    position: { type: Number, required: true }, // Position/order of the lecture in a course
    resources: [resourceSchema], // Array of resources (title, URL)
    videoUrl: videoUrlSchema, // Video URLs for different resolutions (480p, 720p, 1080p)
    duration: { type: Number, required: true }, // Duration in minutes
    course: { 
        type: Schema.Types.ObjectId,  // Reference to Course model
        ref: 'Course',  // Reference to the 'Course' collection
        required: true 
    },
    instructor: { 
        type: Schema.Types.ObjectId,  // Reference to User model (instructor)
        ref: 'User',  // Reference to the 'User' collection
        required: true 
    },
    isPublished: { type: Boolean, default: false }, // Whether the lecture is published
    isPreview: { type: Boolean, default: false }, // Whether the lecture is a preview
    createdAt: { type: String, default: Date.now }, // Timestamp of creation
    updatedAt: { type: String, default: Date.now }, // Timestamp of last update
});

// Create the model for Lecture
export const Lecture = mongoose.model('Lecture', lectureSchema);

