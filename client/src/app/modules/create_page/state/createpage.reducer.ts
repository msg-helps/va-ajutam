import HelpRequest from '../../../shared/model/help-request.model';
import State from '../../../shared/state/state';
import {HelpOfferRequestActionTypes, HelpOfferRequestActionUnion} from './createpage.action';
import BaseHelp from 'src/app/shared/model/help.model';

export interface HelpOfferRequestState {
  data: BaseHelp;
  loading: boolean;
  saving: boolean;
}

export interface StateWithHelpOfferRequest extends State {
  helpOfferRequestState: HelpOfferRequestState;
}

export const initialState: HelpOfferRequestState = {
  data: null,
  loading: true,
  saving: false
};

export function helpOfferRequestReducer(state = initialState, action: HelpOfferRequestActionUnion): HelpOfferRequestState {
  switch (action.type) {
    case HelpOfferRequestActionTypes.LoadHelpOfferRequest: {
      return {
        ...state,
        loading: true,
      };
    }
    case HelpOfferRequestActionTypes.LoadHelpOfferRequestSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case HelpOfferRequestActionTypes.LoadHelpOfferRequestFailure: {
      return {
        ...state,
        loading: false,
      };
    }
    case HelpOfferRequestActionTypes.SaveHelpOfferRequest: {
      return {
        ...state,
        saving: true,
      };

    }
    case HelpOfferRequestActionTypes.SaveHelpOfferRequestSuccess: {
      return {
        ...state,
        saving: false,
      };
    }
    case HelpOfferRequestActionTypes.SaveHelpOfferRequestFailure: {
      return {
        ...state,
        saving: false
      };
    }
    default: {
      return state;
    }
  }
}
export const selectHelpOfferRequestState = (state: StateWithHelpOfferRequest) => state.helpOfferRequestState;
