import { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { removeUser } from '../../store/slices/userSlice';
import mobileMenu from '../../assets/icons/mobile-menu.svg';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const preventDefaultClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  useLayoutEffect(() => {
    const updateMenuState = () => {
      if (window.innerWidth > 720) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', updateMenuState);

    return () => window.removeEventListener('resize', updateMenuState);
  }, []);

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbar_inner}>
          <ul className={`${styles.navList} ${isOpen ? 'activeMenu' : ''}`}>
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
          <button
            className={styles.mobileMenuIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={mobileMenu} alt="mobile menu" />
          </button>
        </div>
      </Container>
    </nav>
  );
};
