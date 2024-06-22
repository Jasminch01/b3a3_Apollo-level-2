import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";

const createUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await userService.createUserDB(user);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "user registerd successfully",
    data: result,
  });
});

const LoginUser = catchAsync(async (req, res) => {
  const userCradientials = req.body;
  const { user, token } = await userService.userLogin(userCradientials);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "user login successfully",
    token: token,
    data: user,
  });
});

const GetUserProfile = catchAsync(async (req, res) => {
  const user = req.user;
  const email = user.userEmail;
  const result = await userService.getUserProfileDB(email);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "user retrive successfully",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const user = req.user;
  const email = user.userEmail;
  const updateData = req.body;
  const result = await userService.updateUserDB(email, updateData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "user updated successfully",
    data: result,
  });
});

export const userController = {
  createUser,
  LoginUser,
  GetUserProfile,
  updateUser,
};
