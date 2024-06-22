import { Router } from "express";
import { userController } from "./user.controller";
import validateRequestedData from "../../utils/validateRequestedData";
import { loginUserValidationSchema, userValidationSchema } from "./user.validation";
import { currentUser } from "../../middleware/auth";


const router = Router();

router.post("/signup", validateRequestedData(userValidationSchema), userController.createUser);
router.post("/login", validateRequestedData(loginUserValidationSchema), userController.LoginUser);
router.get("/me", currentUser(), userController.GetUserProfile);
router.put('/me', currentUser(), userController.updateUser)

export const userRouter = router;
