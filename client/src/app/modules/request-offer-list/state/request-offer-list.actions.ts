import {ListType} from '../request-offer-list.model';
import {Action} from '@ngrx/store';
import HelpRequest from '../../../shared/model/help-request.model';
import HelpOffer from '../../../shared/model/help-offer.model';

export enum RequestOfferListActionTypes {
  LoadRequests = '[RequestOfferList] Load Requests',
  LoadRequestsSuccess = '[RequestOfferList] Load Requests Success',
  LoadOffers = '[RequestOfferList] Load Offers',
  LoadOffersSuccess = '[RequestOfferList] Load Offers Success',
  LoadRequestOfferFailure = '[RequestOfferList] Load Request Offer Failure',
  ChangeListType = '[RequestOfferList] Change List Type'
}

export class LoadRequests implements Action {
  readonly type = RequestOfferListActionTypes.LoadRequests;
}


export class LoadRequestsSuccess implements Action {
  readonly type = RequestOfferListActionTypes.LoadRequestsSuccess;

  constructor(public payload: HelpRequest[]) {
  }
}

export class LoadOffers implements Action {
  readonly type = RequestOfferListActionTypes.LoadOffers;
}

export class LoadOffersSuccess implements Action {
  readonly type = RequestOfferListActionTypes.LoadOffersSuccess;

  constructor(public payload: HelpOffer[]) {
  }
}

export class ChangeListType implements Action {
  readonly type = RequestOfferListActionTypes.ChangeListType;

  constructor(public payload: ListType) {
  }
}

export class LoadRequestOfferFailure implements Action {
  readonly type = RequestOfferListActionTypes.LoadRequestOfferFailure;
}

export type RequestOfferListActionUnion =
  LoadRequests |
  LoadRequestsSuccess |
  LoadOffers |
  LoadOffersSuccess |
  LoadRequestOfferFailure |
  ChangeListType;
