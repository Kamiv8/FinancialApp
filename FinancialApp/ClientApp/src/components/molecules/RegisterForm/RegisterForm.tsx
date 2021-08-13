import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { RegisterValidation } from '../../../validationSchema/validationSchema';
import styles from './RegisterForm.module.scss';
import errorStyle from '../../../style/globalComponents/globalComponents.module.scss';
import { useForm } from 'react-hook-form';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

interface IFormInput{
  email: string;
  password: string;
  confimPassword: string;
}

interface IRegisterFormProps {
}

const RegisterForm: React.FC<IRegisterFormProps> = (props) => {
  const {register,handleSubmit, formState: {errors}} = useForm<IFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(RegisterValidation)
  });
  const onSubmit = (data : IFormInput) => {
    return console.log(data);
  }
  return (
    <>
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

export default RegisterForm;
