import express from "express";
import {
  getAdmin,
  getAdmins,
  login,
  signup,
} from "../controllers/adminControllers.js";
import { signupAdminValidation } from "../validation/adminValidation/adminValidation.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup",signupAdminValidation ,signup);
router.get("/", getAdmins);
router.get("/:id", getAdmin);
export default router;
