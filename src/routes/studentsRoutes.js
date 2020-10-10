import express from "express";
import {
  deleteStudent,
  getStudent,
  getStudents,
  login,
  signup,
  updateStudent,
} from "../controllers/studentControllers.js";
import { checkRole, userAuth } from "../utils/Auth.js";
const router = express.Router();
router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/login", login);
router.post("/signup", signup);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
