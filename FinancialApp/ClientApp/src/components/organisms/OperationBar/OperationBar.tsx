import React, { useEffect, useState } from 'react';
import Title from '../../atoms/Title/Title';
import styles from './OperationBar.module.scss';
import { ReactComponent as Cancel } from '../../../assets/images/cancel.svg';
import OperationForm from '../../molecules/OperationForm/OperationForm';

interface Props {
  close: boolean;
  setClose: (props: boolean) => void;
}

const OperationBar: React.FC<Props> = ({ close, setClose }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Title whiteStyle className={styles.title}>
          Add opeartion
        </Title>
        <Cancel onClick={() => setClose(!close)} className={styles.cancel} />
      </header>
      <div className={styles.content}>
        <OperationForm />
      </div>
    </div>
  );
};

export default OperationBar;
