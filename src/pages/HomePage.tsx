import { Header } from '../components/Header/Header';
import { PostList } from '../components/PostList/PostList';
import { WorkList } from '../components/WorkList/WorkList';

export const HomePage = () => {
  return (
    <>
      <Header />
      <PostList />
      <WorkList />
    </>
  );
};
