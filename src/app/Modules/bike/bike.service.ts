import { TBike } from "./bike.interface";
import Bike from "./bike.modal";

const createBikeDB = async (payload: TBike) => {
  const newUser = await Bike.create(payload);
  return newUser;
};

export const bikeServices = {
  createBikeDB,
};
