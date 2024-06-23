import { Router } from "express";
import { auth, currentUser } from "../../middleware/auth";
import { rentController } from "./rent.controller";

const router = Router();
router.post("/rental", currentUser(), rentController.createReantal);
router.put("/rental/:id/return", auth('admin'), rentController.returnBike);
export const rentRouter = router;
