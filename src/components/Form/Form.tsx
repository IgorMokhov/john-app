import { FC, useState } from 'react';
import styles from './From.module.scss';

interface FormProps {
  title: string;
  handleClick: (login: string, password: string) => void;
}

interface Errors {
  email: string | undefined;
  password: string | undefined;
}

export const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({ email: '', password: '' });

  const validateEmail = (email: string) => {
    if (!email) {
      return 'Email cannot be empty!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Invalid email format!';
    }

    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return 'Password cannot be empty!';
    } else if (password.length < 6) {
      return 'Password must be longer than 6 characters!';
    }

    return '';
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    }

    handleClick(email, password);
  };

  return (
    <form className={styles.form}>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          autoComplete="off"
          value={email}
          placeholder="example@mail.ru"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </label>
      <label htmlFor="pasword">
        Password
        <input
          id="password"
          type="password"
          value={password}
          autoComplete="off"
          placeholder="******"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </label>
      <button onClick={handleButtonClick} type="submit">
        {title}
      </button>
    </form>
  );
};
