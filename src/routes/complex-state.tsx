import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import Complex from '../components/react-reducer/Complex';

export const complexStateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'complex-state',
  component: () => <Complex />,
});
