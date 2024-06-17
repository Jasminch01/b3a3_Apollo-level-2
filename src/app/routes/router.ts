import { Router } from "express";
import { userRouter } from "../Modules/user/user.route";

const router = Router();

const moduleRoutes = [
    {
        path : '/auth',
        route : userRouter,
    },
    {
        path : '/users',
        route : userRouter,
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;