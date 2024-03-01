import { Outlet, createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'posts',
  component: function PostsComponent() {
    return (
      <>
        <h2 style={{ fontSize: '24px', fontWeight: 700 }}>Posts</h2>
        <Outlet />
      </>
    );
  },
});
