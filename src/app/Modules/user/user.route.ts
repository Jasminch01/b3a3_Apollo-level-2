import { Router } from "express";
import { userController } from "./user.controller";
import validateRequestedData from "../../utils/validateRequestedData";
import { loginUserValidationSchema, userValidationSchema } from "./user.validation";

const router = Router();

router.post("/signup", validateRequestedData(userValidationSchema), userController.createUser);
router.post("/login", validateRequestedData(loginUserValidationSchema), userController.LoginUser);

export const userRouter = router;
