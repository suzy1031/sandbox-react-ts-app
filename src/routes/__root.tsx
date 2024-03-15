import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          Posts
        </Link>
        <Link to="/sample-form" className="[&.active]:font-bold">
          sample-form
        </Link>
        <Link to="/sandbox" className="[&.active]:font-bold">
          Sandbox
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
