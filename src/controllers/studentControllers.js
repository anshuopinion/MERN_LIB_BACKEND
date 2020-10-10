import HttpError from "../model/http-error.js";
import User from "../model/User.js";
import { signupUser, userLogin } from "../utils/Auth.js";

export const getStudents = async (req, res, next) => {
  let users;
  try {
    users = await User.find({ role: "student" }, "-password -role");
  } catch (error) {
    return next(new HttpError("Unable to fetch Users", 500));
  }
  res.status(200).json({ students: users });
};

export const getStudent = async (req, res, next) => {
  const userId = req.params.id;

  let user;
  try {
    user = await User.findById(userId, "-password -role");
  } catch (error) {
    return next(
      new HttpError("Something went wrong, Could not find Student", 500)
    );
  }
  !user && next(new HttpError("Could not find a Student For Provided Id", 404));

  res.json({ student: user });
};
export const login = async (req, res, next) => {
  await userLogin(req.body, "student", res, next);
};
export const signup = async (req, res, next) => {
  await signupUser(req.body, "student", res, next);
};
export const updateStudent = (req, res, next) => {};
export const deleteStudent = (req, res, next) => {};
