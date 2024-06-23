"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../Modules/user/user.route");
const bike_routes_1 = require("../Modules/bike/bike.routes");
const rent_routes_1 = require("../Modules/rent/rent.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: user_route_1.userRouter,
    },
    {
        path: "/users",
        route: user_route_1.userRouter,
    },
    {
        path: "",
        route: bike_routes_1.bikeRouter,
    },
    {
        path: "",
        route: rent_routes_1.rentRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
