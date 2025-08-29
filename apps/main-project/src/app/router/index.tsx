import { Outlet, lazyRouteComponent } from '@tanstack/react-router'
import { adapterRouter } from '@shared/core'

const mainRouter = adapterRouter(
  {
    id: 'app',
    component: Outlet,
  },
  [
    {
      path: '/',
      component: lazyRouteComponent(
        () => import('@/app/module/main/component/index.lazy'),
      ),
    },
  ],
)

export { mainRouter }
