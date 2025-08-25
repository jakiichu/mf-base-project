declare module "admin/router" {
    import type { AnyRoute, RootRoute } from "@tanstack/react-router";

    const adminRouter: (parentRoute: RootRoute) => AnyRoute;

    export { adminRouter };
}
