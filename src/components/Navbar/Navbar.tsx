import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="works">Works</NavLink>
        </li>
        <li>
          <NavLink to="blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};