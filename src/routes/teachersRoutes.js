import express from "express";
import {deleteTeacher, getTeacher ,getTeachers, login, signup, updateTeacher} from '../controllers/teacherControllers.js'
const router = express.Router();

router.get("/", getTeachers);
router.get('/:sid',getTeacher);
router.post('/login',login)
router.post("/signup",signup);
router.patch('/:sid',updateTeacher);
router.delete('/:sid',deleteTeacher);


export default router;