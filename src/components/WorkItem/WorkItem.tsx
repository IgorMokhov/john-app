import styles from './WorkItem.module.scss';

interface WorkItemProps {
  title: string;
  date: string;
  categories: string;
  image: string;
  content: string;
}

export const WorkItem = ({
  title,
  date,
  categories,
  image,
  content,
}: WorkItemProps) => {
  return (
    <div className={styles.workItem}>
      <img src={image} alt="work image" />
      <div className={styles.workItem_content}>
        <h3>{title}</h3>
        <span className={styles.date}>{date}</span>
        <span className={styles.categories}>{categories}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};
