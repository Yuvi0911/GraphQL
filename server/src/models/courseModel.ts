import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ratingsAverage: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    whatYouWillLearn: [
        {
            type: String,
            required: true
        }
    ],
    requirements: [
        {
            type: String,
            required: true
        }
    ],
    targetAudience: [
        {
            type: String,
            required: true
        }
    ],
    isPublished: {
        type: Boolean,
        default: false
    },
    isFree: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    isRejected: {
        type: Boolean,
        default: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isTrending: {
        type: Boolean,
        default: false
    },
    isBestSeller: {
        type: Boolean,
        default: false
    },
    coverImage: {
        type: String,
        required: true
    },
    previewVideo: {
        type: String,
        required: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

export const Course = mongoose.models?.Course || mongoose.model("Course", courseSchema);
