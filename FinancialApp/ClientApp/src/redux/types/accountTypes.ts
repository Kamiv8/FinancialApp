// TYPE ACTION FOR REDUX
export enum TypeAction {
  userData = 'GET_USER_DATA',
  userToken = 'GET_USER_TOKEN',
  logoutUser = 'REMOVE_USER_TOKEN',
  registerUser = 'REGISTER_USER'
}
// STATE TYPE
export interface AccountState {
  id: number;
  email: string;
  username: string;
  roleName: string;
  RoleId?: number;
  token: string | undefined;
}

// ACTION type
export interface LoginToken {
  token: string;
}

export interface PromiseHandler<T> {
  data: T;
  status: number;
  statusText?: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser extends LoginUser {
  confimPassword: string;
}

export interface GetDataAction {
  type: TypeAction.userData;
  payload: GetData;
}
export interface GetTokenAction {
  type: TypeAction.userToken;
  payload: LoginToken;
}
export interface GetData {
  id: number;
  email: string;
  username: string;
  roleName: string;
  RoleId?: number;
}
export interface LogoutAction {
  type: TypeAction.logoutUser;
}
