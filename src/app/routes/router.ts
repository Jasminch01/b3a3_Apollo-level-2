import { Router } from "express";
import { userRouter } from "../Modules/user/user.route";
import { bikeRouter } from "../Modules/bike/bike.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRouter,
  },
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "",
    route: bikeRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
