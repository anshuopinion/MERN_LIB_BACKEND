import HttpError from "../model/http-error.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../config/index.js";

import passport from "passport";
export const signupUser = async (reqBody, role, res, next) => {
  let user;
  try {
    let userExist = await validateEmail(reqBody.email);
    if (userExist) {
      return next(new HttpError("Email already exists", 500));
    }
    user = new User({
      ...reqBody,
      role,
    });

    await user.save();
    res.status(201).json({ message: "Registered SuccessFully" });
  } catch (error) {
    console.log(user);
    return next(new HttpError("Unable to signup", 500));
  }
};

export const userLogin = async (userCreds, role, res, next) => {
  let { email, password } = userCreds;
  const user = await User.login(email, password, role, next);
  try {
    let token;
    if (user) {
      token = jwt.sign(
        { userId: user._id, role: user.role, email: user.email },
        SECRET,
        { expiresIn: 60 * 60 }
      );
    }
    let result = {
      email: user.email,
      role: user.role,
      token: `Bearer ${token}`,
    };
    res.status(201).json(result);
  } catch (error) {
    return next(new HttpError("Unable to create Token", 500));
  }
};

const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? true : false;
};

export const userAuth = passport.authenticate("jwt", { session: false });

export const checkRole = (roles) => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();

  