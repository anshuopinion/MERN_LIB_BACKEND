import { Schema, model, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import HttpError from "./http-error";
import { NextFunction } from "express";

export enum RoleType {
  student = "student",
  teacher = "teacher",
  admin = "admin",
}

export interface IUser extends Document {
  name: string;
  email: string;
  role: RoleType;
  password: string;
  data: any;
}
interface IUserModel extends Model<IUser> {
  login(
    email: string,
    password: string,
    role: RoleType,
    next: NextFunction
  ): IUser;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: RoleType,
      default: RoleType.student,
      enum: Object.values(RoleType),
    },
    password: { type: String, required: true, minlength: 6 },
    data: {
      type: Schema.Types.ObjectId,
      required: true,
      // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
      // will look at the `onModel` property to find the right model.
      refPath: "role",
    },
  },
  { timestamps: true }
);

UserSchema.pre<IUser>("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    return next(new HttpError("Unable to signup, try again later", 500));
  }
  next();
});

UserSchema.statics.login = async function (
  email: string,
  password: string,
  role: RoleType,
  next: NextFunction
) {
  try {
    const existingUser = await this.findOne({ email: email }).populate("data");
    if (existingUser) {
      // IUser Role check
      existingUser.role !== role &&
        next(new HttpError("Please make sure login from right portal", 400));
      // If role correct , Compare Password
      const auth = await bcrypt.compare(password, existingUser.password);
      //Return user if password match else return incorrect password message
      if (auth) return existingUser;
      else return next(new HttpError("Password Incorrect", 401));
    } else {
      return next(new HttpError("Invalid Email Address", 401));
    }
  } catch (error) {
    return next(new HttpError("Signin  failed, Please try again later", 400));
  }
};

export default model<IUser, IUserModel>("user", UserSchema);
