import { Link } from 'react-router-dom';
import fb from '../../assets/icons/fb.svg';
import insta from '../../assets/icons/insta.svg';
import twit from '../../assets/icons/twit.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <Link to="#">
          <img src={fb} alt="facebook" />
        </Link>
        <Link to="#">
          <img src={insta} alt="instagram" />
        </Link>
        <Link to="#">
          <img src={twit} alt="twitter" />
        </Link>
        <Link to="#">
          <img src={linkedin} alt="linkedin" />
        </Link>
      </div>
      <p>Copyright ©{new Date().getFullYear()} All rights reserved </p>
    </footer>
  );
};
