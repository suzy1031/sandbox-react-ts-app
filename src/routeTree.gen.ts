/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as SandboxImport } from './routes/sandbox';
import { Route as SampleFormImport } from './routes/sample-form';
import { Route as PostsImport } from './routes/posts';
import { Route as AboutImport } from './routes/about';
import { Route as IndexImport } from './routes/index';
import { Route as PostsIndexImport } from './routes/posts.index';
import { Route as PostspostIdImport } from './routes/posts.@postId';

// Create/Update Routes

const SandboxRoute = SandboxImport.update({
  path: '/sandbox',
  getParentRoute: () => rootRoute,
} as any);

const SampleFormRoute = SampleFormImport.update({
  path: '/sample-form',
  getParentRoute: () => rootRoute,
} as any);

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any);

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRoute,
} as any);

const PostspostIdRoute = PostspostIdImport.update({
  path: '/@postId',
  getParentRoute: () => PostsRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/about': {
      preLoaderRoute: typeof AboutImport;
      parentRoute: typeof rootRoute;
    };
    '/posts': {
      preLoaderRoute: typeof PostsImport;
      parentRoute: typeof rootRoute;
    };
    '/sample-form': {
      preLoaderRoute: typeof SampleFormImport;
      parentRoute: typeof rootRoute;
    };
    '/sandbox': {
      preLoaderRoute: typeof SandboxImport;
      parentRoute: typeof rootRoute;
    };
    '/posts/@postId': {
      preLoaderRoute: typeof PostspostIdImport;
      parentRoute: typeof PostsImport;
    };
    '/posts/': {
      preLoaderRoute: typeof PostsIndexImport;
      parentRoute: typeof PostsImport;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  PostsRoute.addChildren([PostspostIdRoute, PostsIndexRoute]),
  SampleFormRoute,
  SandboxRoute,
]);

/* prettier-ignore-end */
