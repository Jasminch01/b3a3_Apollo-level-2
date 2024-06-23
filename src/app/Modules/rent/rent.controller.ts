import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { rentService } from "./rent.service";

const createReantal = catchAsync(async (req, res) => {
  const user = req.user;
  const email = user.userEmail;
  const payload = req.body;
  const result = await rentService.createRentalDB(email, payload);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Rental created successfully",
    data: result,
  });
});
const returnBike = catchAsync(async (req, res) => {
  const rentalId = req.params.id;
  const result = await rentService.returnBikeDB(rentalId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bike returned successfully",
    data: result,
  });
});

const getAllRentalDB = catchAsync(async (req, res) => {
  const user = req.user;
  const email = user.userEmail;
  const result = await rentService.getAllRentalDB(email);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Rentals are retrived successfully",
    data: result,
  });
});
export const rentController = {
  createReantal,
  returnBike,
  getAllRentalDB,
};
