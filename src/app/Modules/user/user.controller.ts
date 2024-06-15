import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

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

export const userController = {
  createUser,
};
