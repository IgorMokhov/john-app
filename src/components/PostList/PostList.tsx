import { posts } from '../../mock/mock';
import { Container } from '../Container/Container';
import { Post } from '../Post/Post';
import styles from './PostList.module.scss';

export const PostList = () => {
  return (
    <div className={styles.posts}>
      <Container>
        <div className={styles.posts_header}>
          <span>Recent posts</span>
          <a href="#">View all</a>
        </div>
        <div className={styles.postList}>
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </div>
      </Container>
    </div>
  );
};
