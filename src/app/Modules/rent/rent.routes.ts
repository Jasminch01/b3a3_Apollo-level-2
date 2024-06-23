import { Router } from "express";
import { auth, currentUser } from "../../middleware/auth";
import { rentController } from "./rent.controller";

const router = Router();
router.post("/rentals", currentUser(), rentController.createReantal);
router.put("/rentals/:id/return", auth("admin"), rentController.returnBike);
router.get("/rentals", currentUser(), rentController.getAllRentalDB);
export const rentRouter = router;
