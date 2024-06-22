import { Router } from "express";
import { bikeController } from "./bike.controller";
import validateRequestedData from "../../utils/validateRequestedData";
import { bikeZodSchema } from "./bike.validation";
import { auth } from "../../middleware/auth";

const router = Router();

router.post(
  "/bikes",
  auth("admin"),
  validateRequestedData(bikeZodSchema),
  bikeController.createBike
);
router.get("/bikes", auth("admin"), bikeController.getAllBikes);
router.put("/bikes/:id", auth("admin"), bikeController.updateBike);

export const bikeRouter = router;
