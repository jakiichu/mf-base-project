import { createRoute } from "@tanstack/react-router";
import type { AnyRoute, RootRoute, RouteOptions } from "@tanstack/react-router";

const adapterRouter =
    (
        root: Omit<RouteOptions, "getParentRoute"> & {
            path?: string;
            id?: string;
        },
        routes: Array<
            Omit<RouteOptions, "getParentRoute"> & Record<"path", string>
        >,
    ) =>
    (rootRoute: RootRoute): AnyRoute => {
        const createRoot = createRoute({
            ...root,
            getParentRoute: () => rootRoute,
        } as unknown as RouteOptions<any, "string">);

        return createRoot.addChildren([
            ...routes.map(({ ...route }) =>
                createRoute({
                    ...route,
                    getParentRoute: () => createRoot,
                } as RouteOptions),
            ),
        ]);
    };

export { adapterRouter };
