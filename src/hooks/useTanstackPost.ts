import { type Post } from '../routes/posts.index';

const useTanstackPost = (
  post: Post,
): {
  id: string;
  title: string;
  body: string;
} => {
  const id = `ID: ${post.id}`;
  const title = `タイトル: ${post.title}`;
  const body = `内容: ${post.body}`;

  return { id, title, body };
};
export default useTanstackPost;
