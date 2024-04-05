import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { type ReactNode, type ReactElement } from 'react';

const Header = (): ReactElement => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
        React-ts Code Sandbox
      </Typography>
    </Toolbar>
  </AppBar>
);

export const DrawerWrapper = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => (
  <Box
    component="nav"
    sx={{ width: 240, flexShrink: 0 }}
    aria-label="mailbox folders"
  >
    <Toolbar />
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
      open
    >
      <Toolbar />
      {children}
    </Drawer>
  </Box>
);

const path = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/posts',
    name: 'Posts',
  },
  {
    path: '/sample-form',
    name: 'sample-form',
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
  },
  {
    path: '/complex-state',
    name: 'Complex State',
  },
];

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <DrawerWrapper>
          <List>
            {path.map((item) => (
              <ListItem key={item.path}>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Link to={item.path} className="[&.active]:font-bold">
                        {item.name}
                      </Link>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DrawerWrapper>
        <Box my={8}>
          <Outlet />
        </Box>
        <TanStackRouterDevtools />
      </Box>
    </>
  ),
});
