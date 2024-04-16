import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import ContextPage from '../components/use-context/index';

export const useContextRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'use-context',
  component: () => <ContextPage />,
});
