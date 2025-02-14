import { Link, createRoute } from '@tanstack/react-router';
import { postsRoute } from './posts';
import { type Post } from './posts.index';
import useTanstackPost from '../hooks/useTanstackPost';
import { Box, Stack, Typography } from '@mui/material';
import PostNavigator from '../components';

const fetchPost = async (postId: string): Promise<Post> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const post: Post = await res.json();

  return post;
};

export const postRoute = createRoute({
  getParentRoute: () => postsRoute,
  path: '$postId',
  loader: async ({ params }) => await fetchPost(params.postId),
  component: function PostComponent() {
    const post = postRoute.useLoaderData();

    const { id, nextId, prevId, title, body } = useTanstackPost(post);

    return (
      <>
        <PostNavigator prev={prevId} next={nextId} />
        <Box display="flex" justifyContent="center">
          <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Single Post</h2>
        </Box>
        <div style={{ margin: '16px' }}>
          <p>ID: {id}</p>
          <p>{title}</p>
          <p>{body}</p>
        </div>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
          {prevId >= 1 && (
            <Link to="/posts/$postId" params={{ postId: prevId.toString() }}>
              <Typography color="primary" fontWeight={700}>
                前へ
              </Typography>
            </Link>
          )}
          {nextId <= 100 && (
            <Link to="/posts/$postId" params={{ postId: nextId.toString() }}>
              <Typography color="primary" fontWeight={700}>
                次へ
              </Typography>
            </Link>
          )}
        </Stack>
      </>
    );
  },
});
