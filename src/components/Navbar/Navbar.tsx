import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { removeUser } from '../../store/slices/userSlice';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user);

  const preventDefaultClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <nav className={styles.navbar}>
      <Container>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="works" onClick={preventDefaultClick}>
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="blog" onClick={preventDefaultClick}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" onClick={preventDefaultClick}>
              Contacts
            </NavLink>
          </li>
        </ul>
        <button
          className={styles.logoutBtn}
          onClick={() => dispatch(removeUser())}
        >
          Log out ({email})
        </button>
      </Container>
    </nav>
  );
};
