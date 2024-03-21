import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../store/slices/userSlice';
import styles from './SignUp.module.scss';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
    <div className={styles.signUp}>
      <h2>Register</h2>
      <Form title="Sign Up" handleClick={handleRegister} />
      <p>
        or <Link to="/login">login your account</Link>
      </p>
    </div>
  );
};
