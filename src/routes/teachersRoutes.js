import express from "express";
import {deleteTeacher, getTeacher ,getTeachers, login, signup, updateTeacher} from '../controllers/teacherControllers.js'
const router = express.Router();

router.get("/", getTeachers);
router.get('/:id',getTeacher);
router.post('/login',login)
router.post("/signup",signup);
router.patch('/:id',updateTeacher);
router.delete('/:id',deleteTeacher);


export default router;