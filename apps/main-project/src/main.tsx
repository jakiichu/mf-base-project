import {
  Outlet,
  RouterProvider,
  createRootRouteWithContext,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { createRoot } from 'react-dom/client'
import * as React from 'react'
import './styles.css'

if (import.meta.env.VITE_STANDALONE === 'y') {
  const rootRoute = createRootRouteWithContext()({
    component: () => (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  })

  const routeTree = rootRoute.addChildren([])

  const router = createRouter({
    routeTree,
  })

  const root = document.getElementById('root')
  if (root)
    createRoot(root).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    )
}
