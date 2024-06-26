import { Container } from '../Container/Container';
import { WorkItem } from '../WorkItem/WorkItem';
import { works } from '../../mock/mock';
import styles from './WorkList.module.scss';

export const WorkList = () => {
  return (
    <div className={styles.workList}>
      <Container>
        <span className={styles.subtitle}>Featured works</span>
        {works.map((work) => {
          return <WorkItem key={work.id} {...work} />;
        })}
      </Container>
    </div>
  );
};
