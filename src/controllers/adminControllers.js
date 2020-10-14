import { signupUser, userLogin } from "../utils/Auth.js";
import { getUser, getUsers } from "./shared/sharedContollers.js";

export const getAdmins = async (req, res, next) => {
  await getUsers(req, res, next, "admin");
};
export const getAdmin = async (req, res, next) => {
  await getUser(req, res, next, "admin");
};
export const signup = async (req, res, next) => {
  await signupUser(req.body, "admin", res, next);
};
export const login = async (req, res, next) => {
  await userLogin(req.body, "admin", res, next);
};
