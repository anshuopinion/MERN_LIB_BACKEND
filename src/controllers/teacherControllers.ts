import { RequestHandler } from "express";
import { RoleType } from "../model/User";
import { signupUser, userLogin } from "../utils/Auth.js";
import { getUser, getUsers } from "./shared/sharedContollers.js";

export const getTeachers: RequestHandler = async (req, res, next) => {
  await getUsers(req, res, next, RoleType.teacher);
};

export const getTeacher: RequestHandler = async (req, res, next) => {
  await getUser(req, res, next, RoleType.teacher);
};
export const login: RequestHandler = async (req, res, next) => {
  await userLogin(req.body, RoleType.teacher, res, next);
};
export const signup: RequestHandler = async (req, res, next) => {
  await signupUser(req.body, RoleType.teacher, res, next);
};
// export const updateTeacher = (req, res, next) => {};
// export const deleteTeacher = (req, res, next) => {};
