import React from "react";
import { connect } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

import * as UserAccount from "../../redux/reducers/accountReducer";
import { ApplicationState } from "../../redux/reducers/rootReducer";
import * as ErrorStore from "../../redux/reducers/errorReducer";

type UserProps = typeof UserAccount.actionCreator & ErrorStore.ErrorState;

interface IFormInput {
  email: string;
  password: string;
}

const Login: React.FC<UserProps> = ({
  login,
  logout,
  getData,
  error,
  isTrue,
}) => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    login({ email: data.email, password: data.password });

  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("email")} />
          <input type="text" {...register("password")} />
          <button>siemkaaaa</button>
        </form>
        <button onClick={() => logout()}>siemkaaaa logout</button>
        <button onClick={() => getData()}>getData after login 🥘</button>
      </div>
    </>
  );
};

export default connect(
  (state: ApplicationState) => state.error,
  UserAccount.actionCreator
)(Login as any);
