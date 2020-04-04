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
    confirmed: 1832,
    cured: 321,
    quarantined: 44232,
    isolated: 213000,
    deaths: 103,
    tests: 15234,
    call112: 120000,
    telVerde: 300000,
    newUsers: 123,
    newRequests: 650,
    nearbySearch: 10000,
    completedRequests: 200
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
          confirmed: 0,
          cured: 0,
          quarantined: 0,
          isolated: 0,
          deaths: 0,
          tests: 0,
          call112: 0,
          telVerde: 0,
          newUsers: 0,
          newRequests: 0,
          nearbySearch: 0,
          completedRequests: 0
        }
      };
    }
    default: {
      return state;
    }
  }
}

export const selectAppStatsState = (state: StateWithAppStats) => state.appStats;
