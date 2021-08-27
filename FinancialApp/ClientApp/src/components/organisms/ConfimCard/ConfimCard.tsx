import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../../utilities/Routes';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';
import LoginForm from '../../molecules/LoginForm/LoginForm';
import RegisterForm from '../../molecules/RegisterForm/RegisterForm';
import styles from './ConfimCard.module.scss';

interface IConfimCardProps {
  type: 'login' | 'register',
  title: string;
  paragraph: string;
}

const ConfimCard: React.FC<IConfimCardProps> = ({type,title,paragraph}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Title className={styles.titleHandler}>{title}</Title>
        {type === 'login' ? (
          <div>
            <LoginForm />
            <Link to={Routes.register}>
              <Paragraph className={styles.padding} type="redirect">
                {paragraph}
              </Paragraph>
            </Link>
          </div>
        ) : (
          <div>
            <RegisterForm />
            <Link to={Routes.login}>
              <Paragraph className={styles.padding} type="redirect">
                {paragraph}
              </Paragraph>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ConfimCard;
