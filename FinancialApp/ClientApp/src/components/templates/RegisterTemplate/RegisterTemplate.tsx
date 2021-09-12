import * as React from 'react';
import styles from './RegisterTemplate.module.scss';
import { ReactComponent as Logo } from '../../../assets/images/profits.svg';
import LoginImage from '../../atoms/LoginImage/LoginImage';
import { ReactComponent as Picture } from '../../../assets/images/human_profile.svg';

interface IRegisterTemplateProps {
  type: 'login' | 'register';
}

const RegisterTemplate: React.FC<IRegisterTemplateProps> = ({
  children,
  type,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <div className={styles.content}>
          {type === 'login' ? (
            <div>

              <LoginImage className={styles.picture} />
              </div>
          ) : (
            <div className={styles.pictureWrapper}>
              {""}
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default RegisterTemplate;
