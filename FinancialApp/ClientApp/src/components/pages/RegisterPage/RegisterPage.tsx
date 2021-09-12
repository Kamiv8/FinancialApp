import * as React from 'react';
import ConfimCard from '../../organisms/ConfimCard/ConfimCard';
import RegisterTemplate from '../../templates/RegisterTemplate/RegisterTemplate';

interface IRegisterPageProps {
}

const RegisterPage: React.FC<IRegisterPageProps> = (props) => {
  return (
      <>
        <RegisterTemplate type="register">
            <ConfimCard type="register" title="Create account" paragraph="I want to log in"/>
        </RegisterTemplate>
      </>
  )
  ;
};

export default RegisterPage;
