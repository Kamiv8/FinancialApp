import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { RegisterValidation } from '../../../validationSchema/validationSchema';
import styles from './RegisterForm.module.scss';
import errorStyle from '../../../style/globalComponents/globalComponents.module.scss';
import * as UserAccount from '../../../redux/reducers/accountReducer';
import { useForm } from 'react-hook-form';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { connect } from 'react-redux';
import { RegisterUser } from '../../../redux/types/accountTypes';
import { ApplicationState } from '../../../redux/reducers/rootReducer';
import ErrorPortal from '../../../errorPortal';
import { ErrorState } from '../../../redux/reducers/errorReducer';
import { useState } from 'react';
import PromiseResultModal from '../PromiseResultModal/PromiseResultModal';



interface IRegisterFormProps {}

type RegisterFormProps = IRegisterFormProps & typeof UserAccount.actionCreator & ErrorState;

const RegisterForm: React.FC<RegisterFormProps> = ({registerAccount,isTrue,error}) => {
  const[onClickSubmit,setOnClickSubmit] = useState<boolean>(false);
  const {register,handleSubmit, formState: {errors}} = useForm<RegisterUser>({
    mode: 'onSubmit',
    resolver: yupResolver(RegisterValidation)
  });
  const onSubmit = (data: RegisterUser): void => {
    registerAccount(data);
    setOnClickSubmit(!onClickSubmit);
  };
  return (
    <>
      {isTrue  ? (
        <ErrorPortal><PromiseResultModal done>This email is busy</PromiseResultModal></ErrorPortal>
      ) : error === 200 ? <ErrorPortal ><PromiseResultModal>Welcome!!!</PromiseResultModal></ErrorPortal> : null}
      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        {errors && (
          <span className={errorStyle.errors}>{errors.email?.message}</span>
        )}
        <Input
          placeholder="email"
          className={styles.inputPadding}
          styleType="login"
          {...register('email')}
        />
        {errors && (
          <span className={errorStyle.errors}>{errors.password?.message}</span>
        )}
        <Input
          placeholder="password"
          type="password"
          styleType="login"
          className={styles.inputPadding}
          {...register('password')}
        />
        {errors && (
          <span className={errorStyle.errors}>
            {errors.confimPassword?.message}
          </span>
        )}
        <Input
          placeholder="confim password"
          type="password"
          styleType="login"
          className={styles.inputPadding}
          {...register('confimPassword')}
        />

        <Button className={styles.buttonHandler} version="first">
          register
        </Button>
      </form>
    </>
  ); 
};

export default connect(
  (state: ApplicationState) => state.error,
  UserAccount.actionCreator,
)(RegisterForm as any);
