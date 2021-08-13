import React from 'react';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';
import LoginForm from '../../molecules/LoginForm/LoginForm';
import RegisterForm from '../../molecules/RegisterForm/RegisterForm';
import styles from './ConfimCard.module.scss';

interface IConfimCardProps {
  type: 'login' | 'register'
}

const ConfimCard: React.FC<IConfimCardProps> = ({type}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Title className={styles.titleHandler}>Sign in</Title>
        {type === 'login' ? <LoginForm /> : <RegisterForm />}
        <Paragraph type="redirect">if you don't have an account, click here</Paragraph>
      </div>
    </>
  );
};

export default ConfimCard;
