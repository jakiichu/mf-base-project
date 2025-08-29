import { Outlet, lazyRouteComponent } from "@tanstack/react-router";
import { adapterRouter } from "@shared/core";

const adminRouter = adapterRouter(
    {
        path: "/admin",
        component: Outlet,
    },
    [
        {
            path: "/user",
            component: lazyRouteComponent(
                () => import("@/app/module/main/component/index.lazy"),
            ),
        },
    ],
);

export { adminRouter };
