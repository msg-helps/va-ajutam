import HelpRequest from '../../../shared/model/help-request.model';
import State from '../../../shared/state/state';
import {HelpRequestActionTypes, HelpRequestActionUnion} from './help-request.action';

export interface HelpRequestState {
  data: HelpRequest;
  loading: boolean;
  coords: {
    loading: boolean;
    data: [number, number];
  };
}

export interface StateWithHelpRequest extends State {
  helpRequest: HelpRequestState;
}

export const initialState: HelpRequestState = {
  data: null,
  loading: true,
  coords: {
    loading: true,
    data: null
  }
};

export function helpRequestReducer(state = initialState, action: HelpRequestActionUnion): HelpRequestState {
  switch (action.type) {
    case HelpRequestActionTypes.LoadHelpRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case HelpRequestActionTypes.LoadHelpRequestSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case HelpRequestActionTypes.LoadHelpRequestFailure: {
      return {
        ...state,
        loading: false,
      };
    }
    case HelpRequestActionTypes.ConvertHelpRequestAddressToCoords: {
      return {
        ...state,
        coords: {
          loading: true,
          data: null
        }
      };
    }
    case HelpRequestActionTypes.ConvertHelpRequestAddressToCoordsSuccess: {
      return {
        ...state,
        coords: {
          loading: false,
          data: action.payload
        }
      };
    }
    case HelpRequestActionTypes.ConvertHelpRequestAddressToCoordsFailure: {
      return {
        ...state,
        coords: {
          loading: false,
          data: [0, 0]
        }
      };
    }
    default: {
      return state;
    }
  }
}
export const selectHelpRequestState = (state: StateWithHelpRequest) => state.helpRequest;
