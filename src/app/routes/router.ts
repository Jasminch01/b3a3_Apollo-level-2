import { Router } from "express";
import { userRouter } from "../Modules/user/user.route";
import { bikeRouter } from "../Modules/bike/bike.routes";
import { rentRouter } from "../Modules/rent/rent.routes";

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
  {
    path: "",
    route: rentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
