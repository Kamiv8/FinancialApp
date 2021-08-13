import React from 'react';
import {  useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginValidation} from '../../../validationSchema/validationSchema';
import { connect } from 'react-redux';
import * as UserAccount from '../../../redux/reducers/accountReducer';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import errorStyle from '../../../style/globalComponents/globalComponents.module.scss';
import styles from './LoginForm.module.scss';


interface IComponentProps {}
interface IFormInput {
    email: string;
    password: string;
}



type LoginFormProps = IComponentProps & typeof UserAccount.actionCreator;

const LoginForm: React.FC<LoginFormProps> = ({login}) => {
  const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>({
    mode: "onSubmit",
    resolver: yupResolver(LoginValidation),
  });
  const onSubmit = (data: IFormInput) => {
    return console.log(data);

  }
  return (
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
  );
};

export default (LoginForm as any);
//connect(null, UserAccount.actionCreator);
// "✔️ all is good"