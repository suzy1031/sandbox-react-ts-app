import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import Form from '../components/react-hook-form/Form';

export const sampleFormRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'sample-form',
  component: () => <Form />,
});
