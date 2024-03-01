import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../libs/theme';
import App from '../App';

export const sandboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'sandbox',
  component: function SandboxComponent() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    );
  },
});
