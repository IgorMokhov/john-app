import styles from './Post.module.scss';

interface PostProps {
  title: string;
  date: string;
  categories: string;
  content: string;
}

export const Post = ({ title, date, categories, content }: PostProps) => {
  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <span>{date}</span> <span>{categories}</span>
      <p>{content}</p>
    </div>
  );
};
