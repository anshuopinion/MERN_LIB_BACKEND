import { RequestHandler } from "express";

import { RoleType } from "../model/User";
import { signupUser, userLogin } from "../utils/Auth.js";
import { getUser, getUsers } from "./shared/sharedContollers.js";

export const getAdmins: RequestHandler = async (req, res, next) => {
  await getUsers(req, res, next, RoleType.admin);
};
export const getAdmin: RequestHandler = async (req, res, next) => {
  await getUser(req, res, next, RoleType.admin);
};
export const signup: RequestHandler = async (req, res, next) => {
  await signupUser(req.body, RoleType.admin, res, next);
};
export const login: RequestHandler = async (req, res, next) => {
  await userLogin(req.body, RoleType.admin, res, next);
};
