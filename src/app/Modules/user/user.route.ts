import { Router } from "express";
import { userController } from "./user.controller";
import userValidationSchema from "./user.validation";
import validateRequestedData from "../../utils/validateRequestedData";

const router = Router();

router.post("/signup", validateRequestedData(userValidationSchema), userController.createUser);

export const userRouter = router;
