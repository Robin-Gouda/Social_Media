import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import dotenv from "dotenv/config";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";

//Routes

const app = express();
// app.options("*", cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const DbPort = process.env.DBPORT;
const database = process.env.DATABASE;

mongoose
  .connect(database)
  .then(() =>
    app.listen(DbPort, () => console.log(`Listening at port ${DbPort}`))
  )
  .catch((error) => console.log(error));

// useage of Routes
// app.use("/auth", AuthRoute);
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);

//SocialMedia_App

// app.get("/", (req, res) => {
//   res.send("hello World");
// });

// app.listen(PORT, () => {
//   console.log(`Server started at port ${PORT}`);
// });
