import express from "express";
import cors from "cors";
import booksRoute from "./routes/booksRoutes.js";
import studentsRoute from "./routes/studentsRoutes.js";
import teachersRoute from "./routes/teachersRoutes.js";
import adminRoute from "./routes/adminRoutes.js";
import mongoose from "mongoose";
const app = express();
const port = 9000;
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/books", booksRoute);
app.use("/api/students", studentsRoute);
app.use("/api/teachers", teachersRoute);
app.use("/api/admin", adminRoute);

mongoose
  .connect(
    "mongodb+srv://admin:sqfjqWBdwWNmSvlN@cluster0.txxgc.gcp.mongodb.net/RealTime-Library?authSource=admin&replicaSet=atlas-xj692b-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    app.listen(port, () => {
      `Listening On Port ${port}`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
