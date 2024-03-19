import { Container } from '../Container/Container';
import johnAvatar from '../../assets/john-avatar.jpg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_inner}>
          <div className={styles.header_content}>
            <h1>
              Hi, I am John, <br />
              Creative Technologist
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button>Download Resume</button>
          </div>
          <div className={styles.header_avatar}>
            <img src={johnAvatar} alt="John's avatar" />
          </div>
        </div>
      </Container>
    </header>
  );
};
