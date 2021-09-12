import * as React from 'react';
import styles from './OperationAside.module.scss';
import Title from '../../atoms/Title/Title';
import OperationForm from '../../molecules/OperationForm/OperationForm';
import {ReactComponent as LogoutIcon} from '../../../assets/images/LogoutIcon.svg'

interface IOperationAsideProps {
}

const OperationAside: React.FunctionComponent<IOperationAsideProps> = (props) => {
  return (
      <aside className={styles.wrapper}>
          <div className={styles.userContainer}>
              <div className={styles.userIcon}></div>
                hgjfkdlhjgklfd;
                <LogoutIcon style={{fill: 'black'}} className={styles.logout}/>
          </div>
          <Title className={styles.title}>Add operation</Title>
          <OperationForm/>
      </aside>
  );
};

export default OperationAside;
