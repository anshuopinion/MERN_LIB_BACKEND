import { signupUser, userLogin } from "../utils/Auth.js";

export const getStudents = (req, res, next) => {
  res.json({ message: true });
};
export const getStudent = (req, res, next) => {};
export const login = async (req, res, next) => {
  await userLogin(req.body, "student", res, next);
};
export const signup = async (req, res, next) => {
  await signupUser(req.body, "student", res, next);
};
export const updateStudent = (req, res, next) => {};
export const deleteStudent = (req, res, next) => {};
