import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../Form/Form';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/slices/userSlice';
import styles from './Login.module.scss';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <Form title="Login" handleClick={handleLogin} />
      <p>
        or <Link to="/register">create new account</Link>
      </p>
    </div>
  );
};
