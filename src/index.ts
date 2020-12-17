import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import booksRoute from "./routes/booksRoutes";
import studentsRoute from "./routes/studentsRoutes";
import teachersRoute from "./routes/teachersRoutes";
import adminRoute from "./routes/adminRoutes";
import mongoose from "mongoose";
import HttpError from "./model/http-error";
import { DB, PORT } from "./config/index";
import passport from "passport";
import mPassport from "./middleware/passport";
import cookieParser from "cookie-parser";
import morgan from "morgan";
const app = express();

const port: number = PORT || 9000;
app.use(morgan("tiny"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());

app.use(passport.initialize());
mPassport(passport);

// Routes;
app.use("/api/books", booksRoute);
app.use("/api/students", studentsRoute);
app.use("/api/teachers", teachersRoute);
app.use("/api/admins", adminRoute);

app.use(() => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error.message);

  if (res.headersSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An Unknown error occured" });
};

app.use(errorHandler);

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
    throw new HttpError("Unable to connect database", 501);
  });
