
import { signupUser, userLogin } from "../utils/Auth.js";
import { getUser, getUsers } from "./shared/sharedContollers.js";

export const getStudents = async (req, res, next) => {
  await getUsers(req, res, next, "student");
};

export const getStudent = async (req, res, next) => {
  await getUser(req, res, next, "student");
};
export const login = async (req, res, next) => {
  await userLogin(req.body, "student", res, next);
};
export const signup = async (req, res, next) => {
  await signupUser(req.body, "student", res, next);
};
export const updateStudent = (req, res, next) => {};
export const deleteStudent = (req, res, next) => {};
