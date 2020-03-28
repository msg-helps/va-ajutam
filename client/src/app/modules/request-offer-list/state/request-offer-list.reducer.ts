import {ListModel, ListType} from '../request-offer-list.model';
import {RequestOfferListActionTypes, RequestOfferListActionUnion} from './request-offer-list.actions';
import State from '../../../shared/state/state';

export interface RequestOfferListState {
  data: ListModel[];
  selectedListType: ListType;
  loading: boolean;
  error: boolean;
}

export interface StateWithRequestOfferList extends State {
  requestOfferList: RequestOfferListState;
}

export const initialState: RequestOfferListState = {
  data: [],
  selectedListType: ListType.OFFERS,
  loading: false,
  error: false
};

export function requestOfferListReducer(state = initialState, action: RequestOfferListActionUnion): RequestOfferListState {
  switch (action.type) {
    case RequestOfferListActionTypes.LoadOffers:
      return {
        ...state,
        data: [],
        loading: true,
        error: false
      };
    case RequestOfferListActionTypes.LoadRequests:
      return {
        ...state,
        data: [],
        loading: true,
        error: false
      };
    case RequestOfferListActionTypes.LoadOffersSuccess:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case RequestOfferListActionTypes.LoadRequestsSuccess:
      return {
        ...state,
        data: action.payload,
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
