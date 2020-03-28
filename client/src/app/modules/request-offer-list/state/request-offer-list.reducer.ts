import {ListType} from '../request-offer-list.model';
import {RequestOfferListActionTypes, RequestOfferListActionUnion} from './request-offer-list.actions';
import State from '../../../shared/state/state';
import HelpRequest from '../../../shared/model/help-request.model';
import HelpOffer from '../../../shared/model/help-offer.model';

export interface RequestOfferListState {
  requests: HelpRequest[];
  offers: HelpOffer[];
  selectedListType: ListType;
  loading: boolean;
  error: boolean;
}

export interface StateWithRequestOfferList extends State {
  requestOfferList: RequestOfferListState;
}

export const initialState: RequestOfferListState = {
  offers: [],
  requests: [],
  selectedListType: ListType.OFFERS,
  loading: false,
  error: false
};

export function requestOfferListReducer(state = initialState, action: RequestOfferListActionUnion): RequestOfferListState {
  switch (action.type) {
    case RequestOfferListActionTypes.LoadOffers:
      return {
        ...state,
        offers: [],
        loading: true,
        error: false
      };
    case RequestOfferListActionTypes.LoadRequests:
      return {
        ...state,
        requests: [],
        loading: true,
        error: false
      };
    case RequestOfferListActionTypes.LoadOffersSuccess:
      return {
        ...state,
        offers: action.payload,
        loading: false,
        error: false
      };
    case RequestOfferListActionTypes.LoadRequestsSuccess:
      return {
        ...state,
        requests: action.payload,
        loading: false,
        error: false
      };
    case RequestOfferListActionTypes.LoadRequestOfferFailure:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RequestOfferListActionTypes.ChangeListType:
      return {
        ...state,
        selectedListType: action.payload
      };
  }
}

export const selectListState = (state: StateWithRequestOfferList) => state.requestOfferList;
