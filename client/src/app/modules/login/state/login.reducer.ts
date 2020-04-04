import State from '../../../shared/state/state';
import {User} from '../login.model';
import {LoginActionTypes, LoginActionUnion} from './login.actions';

export interface LoginState {
  data: User;
  loading: boolean;
  error: boolean;
}

export interface StateWithLogin extends State {
  login: LoginState;
}

export const initialState: LoginState = {
  data: null,
  loading: false,
  error: false
};

export function loginReducer(state = initialState, action: LoginActionUnion): LoginState {
  switch (action.type) {
    case LoginActionTypes.Login: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case LoginActionTypes.LoginSuccess: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    }
    case LoginActionTypes.LoginError: {
      return {
        ...state,
        loading: false,
        error: true,
        data: null
      };
    }
    default: {
      return state;
    }
  }
}
export const selectLoginState = (state: StateWithLogin) => state.login;
