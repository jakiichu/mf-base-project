import {
    Outlet,
    createRootRouteWithContext,
    createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { QueryClient } from "@tanstack/react-query";
import { Error } from "@shared/core";
import type { RootRoute } from "@tanstack/react-router";

interface IRootContext {
    queryClient: QueryClient;
}

const { mainRouter } = await import("main/router");

const rootRoute = createRootRouteWithContext<IRootContext>()({
    component: () => (
        <>
            <Error></Error>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

const routeTree = rootRoute.addChildren([
    mainRouter(rootRoute as unknown as RootRoute),
    // adminRouter(rootRoute as unknown as RootRoute),
]);

const queryClient = new QueryClient();

const router = createRouter({
    routeTree,
    context: {
        queryClient,
    },
});

export { rootRoute, router };
