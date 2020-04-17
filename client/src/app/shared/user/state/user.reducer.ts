import State from '../../state/state';
import User from '../../model/user.model';
import { UserActionTypes, UserActionUnion } from './user.action';

export interface UserState {
  data: User;
  loading: boolean;
  error: boolean;
}

export const initialState: UserState = {
  data: {
      id: '',
      isAdmin: false,
      isBanned: false,
      firstName: '',
      lastName: '',
      organization: '',
      phone: '',
      region: ''
  },
  loading: false,
  error: false
};

export function userReducer(state = initialState, action: UserActionUnion): UserState {
  switch (action.type) {
    case UserActionTypes.ResetUser: {
      return {
        ...initialState
      };
    }
    case UserActionTypes.LoadUser: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case UserActionTypes.LoadUserSuccess: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    }
    case UserActionTypes.LoadUserFailure: {
      return {
        ...state,
        loading: false,
        error: true,
        data: {
            id: '',
            isAdmin: false,
            isBanned: false,
            firstName: '',
            lastName: '',
            organization: '',
            phone: '',
            region: ''
        }
      };
    }
    case UserActionTypes.MarkUserAsBanned: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.MarkUserAsBannedSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case UserActionTypes.MarkUserAsBannedFailure: {
      return {
        ...state,
        loading: false,
      };
    }
    case UserActionTypes.MarkUserAsNotBanned: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.MarkUserAsNotBannedSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case UserActionTypes.MarkUserAsNotBannedFailure: {
      return {
        ...state,
        loading: false,
      };
    }
    case UserActionTypes.UpdateUser: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.UpdateUserSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case UserActionTypes.UpdateUserFailure: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
export const selectUserState = (state: State) => state.user;
