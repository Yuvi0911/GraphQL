import dotenv from "dotenv";
import { connectDB } from "./database/database.js";

import { connectGraphQL } from "./graphql/graphql.js";
import express, { NextFunction, Request, Response } from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
// import { insertDummyData } from "./DummyData/User.js"; 
// import { insertDummyLectures } from "./DummyData/Lecture.js";
// import { insertDummyCourses } from "./DummyData/Course.js";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const mongoURI = process.env.MONGO_URI!;

connectDB(mongoURI);

// insertDummyData();
// insertDummyCourses()
// insertDummyLectures();


const graphqlServer = connectGraphQL(port, envMode);
await graphqlServer.start();

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
// app.use(morgan("dev"));

const isAdmin = (req:Request, res:Response, next:NextFunction) => {
  // check if user is admin or not.
  const user = {
    role : "admin"
  }
  if(user.role === "admin"){
    next();
  }
  else{
    res.send("You are not allowed to access this");
  }
}

// graphql ko access krne k liye hum localhost:4444/graphql pr jaiye ge.
// yadi hum chahte h ki keval admin k roures ko graphql ki help se access kre toh hum ek ek middleware laga dege jo check krega ki jis user ne us route pr request bheji h vo admin h ya nhi.
app.use("/graphql", isAdmin, expressMiddleware(graphqlServer));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// // your routes here

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

// app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
