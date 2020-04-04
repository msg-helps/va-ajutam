import HelpRequest from '../../../shared/model/help-request.model';
import State from '../../../shared/state/state';
import {HelpRequestActionTypes, HelpRequestActionUnion} from './help-request.action';
import HelpOffer from '../../../shared/model/help-offer.model';
import {ListType} from '../help-requests.model';

export interface HelpRequestState {
  data: HelpRequest;
  requests: HelpRequest[];
  offers: HelpOffer[];
  selectedListType: ListType;
  error: boolean;
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
  offers: [],
  requests: [],
  selectedListType: ListType.OFFERS,
  data: null,
  loading: true,
  error: false,
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
          data: action.payload.coords
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
    case HelpRequestActionTypes.LoadOffers:
      return {
        ...state,
        offers: [],
        loading: true,
        error: false
      };
    case HelpRequestActionTypes.LoadRequests:
      return {
        ...state,
        requests: [],
        loading: true,
        error: false
      };
    case HelpRequestActionTypes.LoadOffersSuccess:
      return {
        ...state,
        offers: action.payload,
        loading: false,
        error: false
      };
    case HelpRequestActionTypes.LoadRequestsSuccess:
      return {
        ...state,
        requests: action.payload,
        loading: false,
        error: false
      };
    case HelpRequestActionTypes.LoadRequestOfferFailure:
      return {
        ...state,
        loading: false,
        error: true
      };
    case HelpRequestActionTypes.ChangeListType:
      return {
        ...state,
        selectedListType: action.payload
      };
    default: {
      return state;
    }
  }
}

export const selectHelpRequestState = (state: StateWithHelpRequest) => state.helpRequest;
