import { JwtPayload } from "jsonwebtoken";
import { User } from "../user/user.model";
import { TRental } from "./rent.interface";
import { Rental } from "./rent.model";
import AppError from "../../Errors/AppError";
import httpStatus from "http-status";
import Bike from "../bike/bike.modal";

const createRentalDB = async (
  userEmail: JwtPayload,
  rentalData: Omit<TRental, "userId">
) => {
  const user = await User.findOne({ email: userEmail });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  const payload = {
    userId: user._id,
    ...rentalData,
  };

  // Check if the bike is available
  const bike = await Bike.findOne(
    { _id: rentalData.bikeId },
    { isAvailable: 1 }
  );
  if (!bike) {
    throw new Error("Bike not found");
  }
  if (!bike.isAvailable) {
    throw new Error("Bike is not available");
  }

  // Update bike availability status to false
  bike.isAvailable = false;
  await bike.save();

  // Create the rental
  const result = await Rental.create(payload);
  return result;
};

const returnBikeDB = async (rentalId: string) => {
  const rental = await Rental.findById(rentalId);
  if (!rental) {
    throw new Error("Rental not found");
  }
  if (rental.isReturned) {
    throw new Error("Bike has already been returned");
  }

  const bike = await Bike.findById(rental.bikeId);
  if (!bike) {
    throw new Error("Bike not found");
  }

  // Calculate the total cost based on the rental duration
  const returnTime = new Date();
  const rentalDurationHours = Math.ceil(
    (returnTime.getTime() - rental.startTime.getTime()) / (1000 * 60 * 60)
  );
  const totalCost = rentalDurationHours * bike.pricePerHour;

  // Update the rental details
  rental.returnTime = returnTime;
  rental.totalCost = totalCost;
  rental.isReturned = true;
  await rental.save();

  // Update bike availability status to true
  bike.isAvailable = true;
  await bike.save();

  return rental;
};

const getAllRentalDB = async (email: string) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "user not found");
  }
  const userId = user?._id;
  const result = await Rental.find({userId : userId});
  return result;
};

export const rentService = {
  createRentalDB,
  returnBikeDB,
  getAllRentalDB,
};
