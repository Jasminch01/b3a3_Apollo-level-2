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
  const updatedBike = await Bike.findOneAndUpdate({ _id: id }, update, {
    new: true,
    runValidators: true,
  });
  return updatedBike;
};

export const bikeServices = {
  createBikeDB,
  getAllBikesDB,
  updateBikeDB,
};
