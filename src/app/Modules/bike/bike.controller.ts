import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bikeServices } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const bike = req.body;
  const result = await bikeServices.createBikeDB(bike);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bike added successfully",
    data: result,
  });
});

export const bikeController = {
  createBike,
};
