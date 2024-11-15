import mongoose from "mongoose";
import { User } from "../models/userModel.js";

// Dummy data
const dummyUsers = [
    {
        name: "John Doe",
        googleId: "google123",
        email: "johndoe@example.com",
        password: "hashedpassword123",
        gender: "male",
        avatar: "https://example.com/avatar1.jpg",
        verified: true,
        watching: [], // Add course IDs as needed
        watched: [],
        saved: [],
        role: "user",
        verificationToken: "sampleVerificationToken123",
        verificationExpire: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day from now
        passwordResetToken: null,
        passwordResetExpire: null,
    },
    {
        name: "Jane Smith",
        googleId: "google456",
        email: "janesmith@example.com",
        password: "hashedpassword456",
        gender: "female",
        avatar: "https://example.com/avatar2.jpg",
        verified: false,
        watching: [],
        watched: [],
        saved: [],
        role: "instructor",
        verificationToken: "sampleVerificationToken456",
        verificationExpire: new Date(Date.now() + 24 * 60 * 60 * 1000),
        passwordResetToken: "samplePasswordResetToken456",
        passwordResetExpire: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    }
];

// Insert dummy data
export const insertDummyData = async () => {
    try {
        await User.insertMany(dummyUsers);
        console.log("Dummy users added successfully!");
    } catch (error) {
        console.error("Error adding dummy users:", error);
    } finally {
        mongoose.connection.close();
    }
};
