import { signupUser, userLogin } from "../utils/Auth.js";
export const getTeachers = (req, res, next) => {};
export const getTeacher = (req, res, next) => {};
export const login = async (req, res, next) => {
  await userLogin(req.body, "teacher", res, next);
};
export const signup = async (req, res, next) => {
  await signupUser(req.body, "teacher", res, next);
  
};
export const updateTeacher = (req, res, next) => {};
export const deleteTeacher = (req, res, next) => {};
