import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { type ReactElement } from 'react';

const About = (): ReactElement => {
  return <div className="p-2">Hello from About!</div>;
};
export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});
