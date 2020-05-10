import {ActionReducerMap} from '@ngrx/store';
import {userReducer, UserState} from '../user/state/user.reducer';

export default interface State {
  user: UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer
};


