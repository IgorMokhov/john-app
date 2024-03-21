import { useAppSelector } from './redux-hooks';

export const useAuth = () => {
  const { email } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
  };
};
