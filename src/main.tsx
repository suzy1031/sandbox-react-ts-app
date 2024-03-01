import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tailwindcss/tailwind.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/__root';
import { indexRoute } from './routes';
import { aboutRoute } from './routes/about';
import { postsRoute } from './routes/posts';
import { postsIndexRoute } from './routes/posts.index';
import { postRoute } from './routes/posts.@postId';
import { sandboxRoute } from './routes/sandbox';

// ref1: https://reffect.co.jp/react/tanstack-router
// ref2: https://tanstack.com/router/latest/docs/framework/react/examples/basic-file-based
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  postsRoute.addChildren([postsIndexRoute, postRoute]),
  sandboxRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
