import {
    Outlet,
    createRootRouteWithContext,
    createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { QueryClient } from "@tanstack/react-query";
import { Fragment } from "react";
import { Error } from "@shared/core";

interface IRootContext {
    queryClient: QueryClient;
}

const { mainRouter } = await import("main/router");
const { adminRouter } = await import("admin/router");

const rootRoute = createRootRouteWithContext<IRootContext>()({
    component: () => (
        <Fragment>
            <Outlet />
            <TanStackRouterDevtools />
        </Fragment>
    ),
    notFoundComponent: () => <Error />,
});

const routeTree = rootRoute.addChildren([
    mainRouter(rootRoute),
    adminRouter(rootRoute),
]);

const queryClient = new QueryClient();

const router = createRouter({
    routeTree,
    context: {
        queryClient,
    },
});

export { rootRoute, router };
