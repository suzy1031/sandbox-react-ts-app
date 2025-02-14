import { Link, createRoute } from '@tanstack/react-router';
import { postsRoute } from './posts';
import { Box } from '@mui/material';

export interface Post {
  id: string;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await res.json();

  return posts;
};

export const postsIndexRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '/',
  loader: async () => await fetchPosts(),
  component: function PostsIndexComponent() {
    const posts = postsIndexRoute.useLoaderData();

    return (
      <Box m={4}>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                to="/posts/$postId"
                params={{
                  postId: post.id,
                }}
                style={{ textDecoration: 'underline' }}
              >
                {post.id}:{post.title}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    );
  },
});
