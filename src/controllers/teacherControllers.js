import { signupUser, userLogin } from "../utils/Auth.js";
import { getUser, getUsers } from "./shared/sharedContollers.js";

export const getTeachers = async (req, res, next) => {
  await getUsers(req, res, next, "teacher");
};

export const getTeacher = async (req, res, next) => {
  await getUser(req, res, next, "teacher");
};
export const login = async (req, res, next) => {
  await userLogin(req.body, "teacher", res, next);
};
export const signup = async (req, res, next) => {
  await signupUser(req.body, "teacher", res, next);
};
export const updateTeacher = (req, res, next) => {};
export const deleteTeacher = (req, res, next) => {};
