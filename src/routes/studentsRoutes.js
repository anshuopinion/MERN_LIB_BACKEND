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
import { signupValidation } from "../validation/studentValidation/studentValidation.js";
const router = express.Router();
router.get("/", userAuth, checkRole(["student"]), getStudents);
router.get("/:id", getStudent);
router.post("/login", login);
router.post("/signup", signupValidation, signup);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
