import { FC, useState } from 'react';
import styles from './From.module.scss';

interface FormProps {
  title: string;
  handleClick: (login: string, password: string) => void;
}

export const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    handleClick(email, password);
  };

  return (
    <form className={styles.form}>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          value={email}
          placeholder="example@mail.ru"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </label>
      <label htmlFor="pasword">
        Password
        <input
          id="password"
          type="password"
          value={password}
          placeholder="******"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </label>
      <button onClick={handleButtonClick} type="submit">
        {title}
      </button>
    </form>
  );
};
