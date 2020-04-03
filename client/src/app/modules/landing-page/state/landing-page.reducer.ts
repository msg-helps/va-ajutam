import State from '../../../shared/state/state';
import AppStats from '../landing-page.model';
import {AppStatsActionTypes, AppStatsActionUnion} from './landing-page.action';

export interface AppStatsState {
  data: AppStats;
  loading: boolean;
  error: boolean;
}

export interface StateWithAppStats extends State {
  appStats: AppStatsState;
}

export const initialState: AppStatsState = {
  data: {
    confirmati: '1832',
    vindecati: '321',
    carantina: '44232',
    izolare: '213000',
    call112: '120000',
    telverde: '300000'
  },
  loading: false,
  error: false
};

export function appStatsReducer(state = initialState, action: AppStatsActionUnion): AppStatsState {
  switch (action.type) {
    case AppStatsActionTypes.ResetAppStats: {
      return {
        ...initialState
      };
    }
    case AppStatsActionTypes.LoadAppStats: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case AppStatsActionTypes.LoadAppStatsSuccess: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    }
    case AppStatsActionTypes.LoadAppStatsFailure: {
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          confirmati: '',
          vindecati: '',
          carantina: '',
          izolare: '',
          call112: '',
          telverde: ''
        }
      };
    }
    default: {
      return state;
    }
  }
}
export const selectAppStatsState = (state: StateWithAppStats) => state.appStats;
