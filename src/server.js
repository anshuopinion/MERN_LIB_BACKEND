import express from "express";
import cors from "cors";
import booksRoute from "./routes/booksRoutes.js";
import studentsRoute from "./routes/studentsRoutes.js";
import teachersRoute from "./routes/teachersRoutes.js";
import adminRoute from "./routes/adminRoutes.js";
import mongoose from "mongoose";
import HttpError from "./model/http-error.js";
import { DB, PORT } from "./config/index.js";
import passport from "passport";
import mPassport from "./middleware/passport.js";
import cookieParser from "cookie-parser";

const app = express();
const port = PORT || 900;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());

app.use(passport.initialize());
mPassport(passport);

//Routes
app.use("/api/books", booksRoute);
app.use("/api/students", studentsRoute);
app.use("/api/teachers", teachersRoute);
app.use("/api/admins", adminRoute);

app.use(() => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An Unknown error occured" });
});

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to db");
    app.listen(port, () => {
      console.log(`Listening On Port ${port}`);
    });
  })
  .catch(() => {
    throw new HttpError("Unable to connect database");
  });
