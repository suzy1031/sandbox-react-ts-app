import { createRoute } from '@tanstack/react-router';
import { postsRoute } from './posts';
import { type Post } from './posts.index';
import useTanstackPost from '../hooks/useTanstackPost';

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

    const { id, title, body } = useTanstackPost(post);

    return (
      <>
        <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Single Post</h2>
        <div>
          <p>{id}</p>
          <p>{title}</p>
          <p>{body}</p>
        </div>
      </>
    );
  },
});
