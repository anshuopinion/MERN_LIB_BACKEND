import { signupUser, userLogin } from "../utils/Auth.js";
export const signup = async (req, res, next) => {
  await signupUser(req.body, "admin", res, next);
};
export const login = async (req, res, next) => {
  await userLogin(req.body, "admin", res, next);
};
