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
router.get("/", userAuth, checkRole(["teacher"]), getStudents);
router.get("/:sid", getStudent);

router.post("/login", login);
router.post("/signup", signup);
router.patch("/:sid", updateStudent);
router.delete("/:sid", deleteStudent);

export default router;
