import { ObjectId } from "mongoose";

export type TRental = {
  userId: ObjectId;
  bikeId: ObjectId;
  startTime: Date;
  returnTime?: Date;
  totalCost?: number;
  isReturned?: boolean;
};
