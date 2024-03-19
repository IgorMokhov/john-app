import { Container } from '../Container/Container';
import { works } from '../../mock/mock';
import styles from './WorkList.module.scss';
import { WorkItem } from '../WorkItem/WorkItem';

export const WorkList = () => {
  return (
    <div className={styles.workList}>
      <Container>
        {works.map((work) => {
          return <WorkItem key={work.id} {...work} />;
        })}
      </Container>
    </div>
  );
};
