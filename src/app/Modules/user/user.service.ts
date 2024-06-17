import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { TloginUser, Tuser } from "./user.interface";
import { User } from "./user.model";

const createUserDB = async (payload: Tuser) => {
  const newUser = await User.create(payload);
  return newUser;
};

const userLogin = async (payload: TloginUser) => {
  const email = payload.email;
  const password = payload.password;
  const isUserExist = await User.findOne({ email: email });
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found')
  }

  //is password match

  const isMatchPassword = password === isUserExist?.password;
  if (!isMatchPassword) {
    throw new AppError(httpStatus.FORBIDDEN, 'password not match')
  }else{
    return isUserExist; 
  }
};

export const userService = {
  createUserDB,
  userLogin,
};
