import HttpError from "../model/http-error.js";
import User from "../model/User.js";
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
export const updateStudent = async (req, res, next) => {
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
      res.status(200).json({ ...user.data, name });
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
export const deleteStudent = (req, res, next) => {};
