import catchAsync from "../../utils/catchAsync";
import Tuser from "./user.interface";
import { User } from "./user.model";

const createUserDB = async (payload: Tuser) => {
  const newUser = await User.create(payload);
  return newUser;
};
export const userService = {
    createUserDB
}
