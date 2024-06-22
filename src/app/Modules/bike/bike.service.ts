import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { TBike } from "./bike.interface";
import Bike from "./bike.modal";

const createBikeDB = async (payload: TBike) => {
  const newUser = await Bike.create(payload);
  return newUser;
};

const getAllBikesDB = async () => {
  const bikes = await Bike.find();
  return bikes;
};
const updateBikeDB = async (id: string, update: TBike) => {
  const isBikeExist = await Bike.findById(id);
  if (!isBikeExist) {
    throw new AppError(httpStatus.NOT_FOUND, "bike not found");
  }
  const updatedBike = await Bike.findOneAndUpdate({ _id: id }, update, {
    new: true,
    runValidators: true,
  });
  return updatedBike;
};
const deleteBikeDB = async (id: string) => {
  const isBikeExist = await Bike.findById(id);
  if (!isBikeExist) {
    throw new AppError(httpStatus.NOT_FOUND, "bike not found");
  }
  const deletedBike = await Bike.findOneAndUpdate(
    { _id: id },
    { isAvailable: false },
    { new: true, runValidators: true }
  );
  return deletedBike;
};

export const bikeServices = {
  createBikeDB,
  getAllBikesDB,
  updateBikeDB,
  deleteBikeDB,
};
