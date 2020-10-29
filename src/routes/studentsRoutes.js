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
import { signupValidation, updateStudentValidation } from "../validation/studentValidation/studentValidation.js";
const router = express.Router();
router.get("/", userAuth, checkRole(["teacher"]), getStudents);
router.get("/:id", userAuth, checkRole(["student"]), getStudent);
router.post("/login", login);
router.post(
  "/signup",
  userAuth,
  checkRole(["teacher"]),
  signupValidation,
  signup
);
router.patch("/:id", userAuth, checkRole(["teacher"]), updateStudentValidation,updateStudent);
// router.patch("/reset/:id", userAuth, checkRole(["teacher"]), updateStudent);
router.delete("/:id", userAuth, checkRole(["teacher"]), deleteStudent);

export default router;
