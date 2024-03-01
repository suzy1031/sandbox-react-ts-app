import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import App from '../App';

export const sandboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'sandbox',
  component: function SandboxComponent() {
    return <App />;
  },
});
