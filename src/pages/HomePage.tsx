import { Navigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { PostList } from '../components/PostList/PostList';
import { WorkList } from '../components/WorkList/WorkList';
import { Navbar } from '../components/Navbar/Navbar';
import { useAuth } from '../hooks/use-auth';
import { Footer } from '../components/Footer/Footer';

export const HomePage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <>
      <Navbar />
      <Header />
      <PostList />
      <WorkList />
      <Footer />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
