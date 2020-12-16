import { RequestHandler } from "express";

import HttpError from "../model/http-error";
import User, { RoleType } from "../model/User";
import { signupUser, userLogin } from "../utils/Auth";
import { getUser, getUsers } from "./shared/sharedContollers";

export const getStudents: RequestHandler = async (req, res, next) => {
  await getUsers(req, res, next, RoleType.student);
};

export const getStudent: RequestHandler = async (req, res, next) => {
  await getUser(req, res, next, RoleType.student);
};
export const login: RequestHandler = async (req, res, next) => {
  await userLogin(req.body as any, RoleType.student, res, next);
};
export const signup: RequestHandler = async (req, res, next) => {
  await signupUser(req.body, RoleType.student, res, next);
};
export const updateStudent: RequestHandler = async (req, res, next) => {
  const {
    student_id,
    mobile,
    university_id,
    library_card,
    semester,
    year,
    name,
  } = req.body;
  const userId = req.params.id;
  try {
    const user = await User.findById(userId).populate("data");
    if (!user) return next(new HttpError("User Not Found", 404));
    if (user.data && user.role === "student") {
      name && (user.name = name);
      student_id && (user.data.student_id = student_id);
      mobile && (user.data.mobile = mobile);
      university_id && (user.data.university_id = university_id);
      library_card && (user.data.library_card = library_card);
      semester && (user.data.semester = semester);
      year && (user.data.year = year);
    }
    try {
      await user.save();
      await user.data.save();
      res.status(200).json({ name, _id: userId, data: user.data });
    } catch (error) {
      return next(
        new HttpError("Could not Update Student,someting went wrong", 500)
      );
    }
  } catch (error) {
    return next(
      new HttpError("Some thing went wrong, could not find Student", 500)
    );
  }
};

export const deleteStudent: RequestHandler = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return next(new HttpError("user not found ,invalid id", 404));
    } else {
      res.status(204).json({ message: `Student Deleted: ${userId}` });
    }
  } catch (error) {
    return next(new HttpError("Unable to delete , Some thing went wrong", 500));
  }
};
