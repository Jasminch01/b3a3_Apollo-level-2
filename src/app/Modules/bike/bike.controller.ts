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
const getAllBikes = catchAsync(async (req, res) => {
  const result = await bikeServices.getAllBikesDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bikes retrive successfully",
    data: result,
  });
});

const updateBike = catchAsync(async (req, res) => {
  const bikesId = req.params.id;
  const bikeUpdates = req.body;
  const result = await bikeServices.updateBikeDB(bikesId, bikeUpdates);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Bikes retrive successfully",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBikes,
  updateBike,
};
