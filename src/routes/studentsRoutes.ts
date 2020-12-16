import express from "express";
import { RoleType } from "../model/User";
import {
  deleteStudent,
  getStudent,
  getStudents,
  login,
  signup,
  updateStudent,
} from "../controllers/studentControllers.js";
import { checkRole, userAuth } from "../utils/Auth.js";
import {
  signupValidation,
  updateStudentValidation,
} from "../validation/studentValidation/studentValidation.js";
const router = express.Router();
router.get("/", userAuth, checkRole([RoleType.teacher]), getStudents);
router.get(
  "/:id",
  userAuth,
  checkRole([RoleType.teacher, RoleType.student]),
  getStudent
);
router.post("/login", login);
router.post(
  "/signup",
  userAuth,
  checkRole([RoleType.teacher]),
  signupValidation,
  signup
);
router.patch(
  "/:id",
  userAuth,
  checkRole([RoleType.teacher]),
  updateStudentValidation,
  updateStudent
);
// router.patch("/reset/:id", userAuth, checkRole(["teacher"]), updateStudent);
router.delete("/:id", userAuth, checkRole([RoleType.teacher]), deleteStudent);

export default router;
