import express from "express";
import {
  // deleteTeacher,
  getTeacher,
  getTeachers,
  login,
  signup,
  // updateTeacher,
} from "../controllers/teacherControllers.js";
import { signupTeacherValidation } from "../validation/teacherValidation/teacherValidation.js";
import { loginValidation } from "../validation/userValidation/userValidation.js";
const router = express.Router();

router.get("/", getTeachers);
router.get("/:id", getTeacher);
router.post("/login", loginValidation, login);
router.post("/signup", signupTeacherValidation, signup);
// router.patch("/:id", updateTeacher);
// router.delete("/:id", deleteTeacher);

export default router;
