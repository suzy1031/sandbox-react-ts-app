import { Outlet, createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Box } from '@mui/material';

export const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'posts',
  component: function PostsComponent() {
    return (
      <>
        <Box display="flex" justifyContent="center">
          <h2 style={{ fontSize: '24px', fontWeight: 700 }}>
            Json Placeholder Posts
          </h2>
        </Box>
        <Outlet />
      </>
    );
  },
});
