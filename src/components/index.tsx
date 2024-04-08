import { useKey } from '../hooks/useKey';

const PostNavigator = ({
  prev,
  next,
}: {
  prev: number;
  next: number;
}): null => {
  useKey('ArrowLeft', () => {
    if (!isNaN(prev) && prev > 0) {
      window.location.href = `/posts/${prev}`;
    }
  });

  useKey('ArrowRight', () => {
    if (!isNaN(next) && prev < 101) {
      window.location.href = `/posts/${next}`;
    }
  });

  return null;
};
export default PostNavigator;
