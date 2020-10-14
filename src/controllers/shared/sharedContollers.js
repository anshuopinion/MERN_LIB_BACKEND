import User from "../../model/User.js";
import HttpError from "../../model/http-error.js";
export const getUser = async (req, res, next, type) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId, "-password -__v").populate(
      "data",
      "-__v"
    );

    if (!user)
      return next(
        new HttpError(`Could not find a ${type} For Provided Id`, 404)
      );

    res.json(user);
  } catch (error) {
    return next(
      new HttpError(`Something went wrong, Could not find ${type}`, 500)
    );
  }
};

export const getUsers = async (req, res, next, role) => {
  let users;
  try {
    users = await User.find({ role }, "-password -__v ").populate("data");
  } catch (error) {
    return next(new HttpError(`Unable to fetch ${role}s`, 500));
  }
  res.status(200).json(users);
};
