import * as React from 'react';
import ConfimCard from '../../organisms/ConfimCard/ConfimCard';
import RegisterTemplate from '../../templates/RegisterTemplate/RegisterTemplate';

interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  return (
    <>
      <RegisterTemplate type="login">
        <ConfimCard
          type="login"
          title="Sign in"
          paragraph="if u don't have account, click here"
        />
      </RegisterTemplate>
    </>
  );
};

export default LoginPage;
