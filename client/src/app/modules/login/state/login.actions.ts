import {LoginProvider} from '../../../shared/model/login.model';
import User from '../../../shared/model/user.model';

export enum LoginActionTypes {
  Login = '[Login] Login',
  LoginSuccess = '[Login] Success'
}

export class Login {
  readonly type = LoginActionTypes.Login;

  constructor(public provider: LoginProvider) {
  }
}

export class LoginSuccess {
  readonly type = LoginActionTypes.LoginSuccess;

  constructor(public payload: User) {}
}

export type LoginActionUnion = Login | LoginSuccess;
