import HttpError from "../model/http-error.js";
import User, { RoleType } from "../model/User.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../config/index.js";
import mongoose from "mongoose";
import passport from "passport";
import Student, { IStudent } from "../model/Student.js";
import Admin from "../model/Admin.js";
import Teacher from "../model/Teacher.js";
import { NextFunction, RequestHandler, Response } from "express";
export const signupUser = async (
  reqBody: IStudent,
  role: RoleType,
  res: Response,
  next: NextFunction
) => {
  let user;

  try {
    let userExist = await validateEmail(reqBody.email);
    if (userExist) {
      return next(new HttpError("Email already exists", 500));
    }
    const userData = createData(reqBody, role);
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await userData.save({ session: sess });
      user = new User({
        ...reqBody,
        role,
        data: userData,
      });
      await user.save({ session: sess });
      await sess.commitTransaction();
      res.status(201).json(user);
    } catch (error) {
      return next(
        new HttpError(`Unable to signup ${role} Try Again later.`, 500)
      );
    }
  } catch (error) {
    return next(new HttpError("Unable to signup", 500));
  }
};

export const userLogin = async (
  userCreds: any,
  role: RoleType,
  res: Response,
  next: NextFunction
) => {
  let { email, password } = userCreds;

  try {
    let token;
    const user = await User.login(email, password, role, next);

    if (user) {
      token = jwt.sign(
        { userId: user._id, role: user.role, email: user.email },
        SECRET,
        { expiresIn: 60 * 60 * 60 }
      );
    }

    let result = {
      userId: user._id,
      role: user.role,
      token: `Bearer ${token}`,
    };
    res.cookie("jwt", result, {
      maxAge: 1000 * 60 * 60 * 60,
      // httpOnly: true,
    });
    res.status(200).json(result);
  } catch (error) {
    return next(new HttpError("Unable to create Token", 500));
  }
};

const validateEmail = async (email: string) => {
  let user = await User.findOne({ email });
  return user ? true : false;
};

export const userAuth = passport.authenticate("jwt", { session: false });

export const checkRole = (roles: RoleType[]): RequestHandler => (
  req: any,
  res,
  next
) => {
  if (!roles.includes(req.user.role)) {
    res.status(401).json("Unauthorized");
  } else {
    next();
  }
};
// !roles.includes(req.user.role) ? res.status(401).json("Unauthorized") : next();

const createData = (body: any, role: RoleType) => {
  if (role.toString() === RoleType.student) {
    const student = new Student({
      student_id: body.student_id,
      mobile: body.mobile,
      university_id: body.university_id,
      library_card: body.library_card,
      semester: body.semester,
      year: body.year,
    });
    return student;
  } else if (role === RoleType.teacher) {
    const teacher = new Teacher({
      mobile: body.mobile,
    });
    return teacher;
  } else if (role === RoleType.admin) {
    const admin = new Admin({
      mobile: body.mobile,
    });
    return admin;
  } else {
    throw Error("Wrong Role");
  }
};
