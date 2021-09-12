import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidation } from '../../../validationSchema/validationSchema';
import { connect } from 'react-redux';
import * as UserAccount from '../../../redux/reducers/accountReducer';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import errorStyle from '../../../style/globalComponents/globalComponents.module.scss';
import styles from './LoginForm.module.scss';
import { LoginUser } from '../../../redux/types/accountTypes';
import { Redirect } from 'react-router';
import { ApplicationState } from '../../../redux/reducers/rootReducer';
import { ErrorState } from '../../../redux/reducers/errorReducer';
import ErrorPortal from '../../../errorPortal';
import PromiseResultModal from '../PromiseResultModal/PromiseResultModal';
import {AccountState} from '../../../redux/types/accountTypes';
interface IComponentProps {
  redirect?: boolean;
}

type LoginFormProps = IComponentProps &
  typeof UserAccount.actionCreator &
  ErrorState & AccountState;

const LoginForm: React.FC<LoginFormProps> = ({ login, redirect, error,isTrue}) => {
  //const [shouldRedirect, setShouldRedirect] = useState<typeof redirect>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    mode: 'onSubmit',
    resolver: yupResolver(LoginValidation),
  });
  const onSubmit = (data: LoginUser) => {
    login(data);
  }

  return (
    <>
      {error === 404 ? (
        <ErrorPortal>
          <PromiseResultModal done>
            Login or password is not correct
          </PromiseResultModal>
        </ErrorPortal>
      ) : error === 200 ? (
        <Redirect to="/home" />
      ) : null}
      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        {errors && (
          <span className={errorStyle.errors}>{errors.email?.message}</span>
        )}
        <Input
          className={styles.inputPadding}
          styleType="login"
          {...register('email')}
          placeholder="login"
        />
        {errors && (
          <span className={errorStyle.errors}>{errors.password?.message}</span>
        )}
        <Input
          className={styles.inputPadding}
          styleType="login"
          type="password"
          {...register('password')}
          placeholder="password"
        />

        <Button className={styles.buttonHandler} type="submit" version="first">
          enter
        </Button>
      </form>
    </>
  );
};

export default connect(
  (state: ApplicationState) => state.error,
  UserAccount.actionCreator,
)(LoginForm as any);

// "✔️ all is good"
//