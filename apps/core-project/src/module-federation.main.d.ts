declare module "main/router" {
    import type { AnyRoute, RootRoute } from "@tanstack/react-router";

    const mainRouter: (parentRoute: RootRoute) => AnyRoute;

    export { mainRouter };
}
