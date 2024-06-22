import httpStatus from "http-status";
import bcrypt from "bcrypt";
import AppError from "../../Errors/AppError";
import { TloginUser, Tuser } from "./user.interface";
import { User } from "./user.model";
import config from "../../config";
import { createToken } from "./user.utils";
import { JwtPayload } from "jsonwebtoken";

const createUserDB = async (payload: Tuser) => {
  const user = await User.findOne({ email: payload?.email });

  if (user) {
    throw new AppError(httpStatus.FOUND, "User already exists");
  }
  const newUser = await User.create(payload);
  return newUser;
};

const userLogin = async (payload: TloginUser) => {
  const email = payload.email;
  const password = payload.password;
  const isUserExist = await User.findOne({ email: email }).select("+password");
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, "user not found");
  }
  //is password match
  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, "password not match");
  }

  const jwtPayload = {
    userEmail: isUserExist.email,
    role: isUserExist.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  const userObject: Partial<Tuser> = isUserExist.toObject();

  // Remove the password field from the user object
  delete userObject.password;
  return {
    user: userObject,
    token: accessToken,
  };
};

const getUserProfileDB = async (email: JwtPayload) => {
  if (email) {
    const result = await User.findOne({ email: email });
    return result;
  }
};

const updateUserDB = async (email: JwtPayload, updateData: Tuser) => {
  const user = await User.findOneAndUpdate({email : email}, updateData);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  return user;
};

export const userService = {
  createUserDB,
  userLogin,
  getUserProfileDB,
  updateUserDB,
};
