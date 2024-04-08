import { type Post } from '../routes/posts.index';

const useTanstackPost = (
  post: Post,
): {
  id: string;
  nextId: number;
  prevId: number;
  title: string;
  body: string;
} => {
  const id = post.id;
  const nextId = Number(id) + 1;
  const prevId = Number(id) - 1;
  const title = `タイトル: ${post.title}`;
  const body = `内容: ${post.body}`;

  return { id, nextId, prevId, title, body };
};
export default useTanstackPost;
