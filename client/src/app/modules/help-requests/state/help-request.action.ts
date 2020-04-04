import {Action} from '@ngrx/store';
import HelpRequest from '../../../shared/model/help-request.model';
import {ListType} from '../help-requests.model';
import HelpOffer from '../../../shared/model/help-offer.model';

export enum HelpRequestActionTypes {
  LoadHelpRequest = '[Help Request] Load',
  LoadHelpRequestSuccess = '[Help Request] Load Success',
  LoadHelpRequestFailure = '[Help Request] Load Failure',
  ConvertHelpRequestAddressToCoords = '[Help Request] Convert address to coords',
  ConvertHelpRequestAddressToCoordsSuccess = '[Help Request] Convert address to coords success',
  ConvertHelpRequestAddressToCoordsFailure = '[Help Request] Convert address to coords failure',
  LoadRequests = '[RequestOfferList] Load Requests',
  LoadRequestsSuccess = '[RequestOfferList] Load Requests Success',
  LoadOffers = '[RequestOfferList] Load Offers',
  LoadOffersSuccess = '[RequestOfferList] Load Offers Success',
  LoadRequestOfferFailure = '[RequestOfferList] Load Request Offer Failure',
  ChangeListType = '[RequestOfferList] Change List Type'
}

export class LoadHelpRequest implements Action {
  readonly type = HelpRequestActionTypes.LoadHelpRequest;

  constructor(public payload: { id: string; }) {
  }
}

export class LoadHelpRequestSuccess implements Action {
  readonly type = HelpRequestActionTypes.LoadHelpRequestSuccess;

  constructor(public payload: HelpRequest) {
  }
}

export class LoadHelpRequestFailure implements Action {
  readonly type = HelpRequestActionTypes.LoadHelpRequestFailure;
}

export class ConvertHelpRequestAddressToCoords implements Action {
  readonly type = HelpRequestActionTypes.ConvertHelpRequestAddressToCoords;

  constructor(public payload: { address: string }) {
  }
}

export class ConvertHelpRequestAddressToCoordsSuccess implements Action {
  readonly type = HelpRequestActionTypes.ConvertHelpRequestAddressToCoordsSuccess;

  constructor(public payload: { coords: [number, number] }) {
  }
}

export class ConvertHelpRequestAddressToCoordsFailure implements Action {
  readonly type = HelpRequestActionTypes.ConvertHelpRequestAddressToCoordsFailure;
}

export class LoadRequests implements Action {
  readonly type = HelpRequestActionTypes.LoadRequests;
}


export class LoadRequestsSuccess implements Action {
  readonly type = HelpRequestActionTypes.LoadRequestsSuccess;

  constructor(public payload: HelpRequest[]) {
  }
}

export class LoadOffers implements Action {
  readonly type = HelpRequestActionTypes.LoadOffers;
}

export class LoadOffersSuccess implements Action {
  readonly type = HelpRequestActionTypes.LoadOffersSuccess;

  constructor(public payload: HelpOffer[]) {
  }
}

export class ChangeListType implements Action {
  readonly type = HelpRequestActionTypes.ChangeListType;

  constructor(public payload: ListType) {
  }
}

export class LoadRequestOfferFailure implements Action {
  readonly type = HelpRequestActionTypes.LoadRequestOfferFailure;
}

export type HelpRequestActionUnion = LoadHelpRequest
  | LoadHelpRequestSuccess
  | LoadHelpRequestFailure
  | ConvertHelpRequestAddressToCoords
  | ConvertHelpRequestAddressToCoordsFailure
  | ConvertHelpRequestAddressToCoordsSuccess
  | LoadRequests
  | LoadRequestsSuccess
  | LoadOffers
  | LoadOffersSuccess
  | LoadRequestOfferFailure
  | ChangeListType;
