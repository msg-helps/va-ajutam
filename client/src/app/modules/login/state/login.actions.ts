import {LoginProvider, User} from '../login.model';

export enum LoginActionTypes {
  Login = '[Login] Login',
  LoginSuccess = '[Login] Success',
  LoginError = '[Login] Error'
}

export class Login {
  readonly type = LoginActionTypes.Login;
  constructor(public provider: LoginProvider) {}
}

export class LoginSuccess {
  readonly type = LoginActionTypes.LoginSuccess;

  constructor(public payload: User) {}
}

export class LoginFailure {
  readonly type = LoginActionTypes.LoginError;
}

export type LoginActionUnion = Login | LoginSuccess | LoginFailure;
