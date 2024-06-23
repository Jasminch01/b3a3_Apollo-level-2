import { Schema, Types, model } from "mongoose";
import { TRental } from "./rent.interface";

const rentalSchema = new Schema<TRental>({
  userId: {
    type: Types.ObjectId,
    ref: "User",
  },
  bikeId: {
    type: Types.ObjectId,
    ref: "Bike",
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  returnTime: { type: Date, default: null },
  totalCost: { type: Number, default: 0 },
  isReturned: { type: Boolean, default: false },
});

export const Rental = model<TRental>("Rental", rentalSchema);
