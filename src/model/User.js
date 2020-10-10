import mongoose from "mongoose";
const { Schema, model } = mongoose;
import bcrypt from "bcrypt";
import HttpError from "./http-error.js";
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      default: "student",
      enum: ["student", "teacher", "admin"],
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

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    return next(new HttpError("Unable to signup, try again later", 500));
  }
  next();
});

UserSchema.statics.login = async function (email, password, role, next) {
  let existingUser;
  try {
    existingUser = await this.findOne({ email: email });
  } catch (error) {
    return next(new HttpError("Signin  failed, Please try again later", 400));
  }
  existingUser.role !== role &&
    next(new HttpError("Please make sure login from right portal", 400));

  if (existingUser) {
    const auth = await bcrypt.compare(password, existingUser.password);
    if (auth) return existingUser;
    else return next(new HttpError("Password Incorrect", 401));
  } else {
    return next(new HttpError("Invalid Email Address", 401));
  }
};

export default model("user", UserSchema);
