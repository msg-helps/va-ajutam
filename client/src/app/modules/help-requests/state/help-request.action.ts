import {Action} from '@ngrx/store';
import HelpOffer from '../../../shared/model/help-offer.model';
import HelpRequest from '../../../shared/model/help-request.model';
import Message from '../../../shared/model/message.model';
import {ListType, MessageInputDto} from '../help-requests.model';

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
  ChangeListType = '[RequestOfferList] Change List Type',
  MarkHelpRequestAsDone = '[Help Request] Mark as Done',
  MarkHelpRequestAsDoneSuccess = '[Help Request] Mark as Done Success',
  MarkHelpRequestAsDoneFailure = '[Help Request] Mark as Done Failure',
  LoadHelpRequestMessages = '[ Help Request ] Load Messages',
  LoadHelpRequestMessagesSuccess = '[ Help Request ] Load Messages Success',
  LoadHelpRequestMessagesFailure = '[ Help Request ] Load Messages Failure',
  PostHelpRequestMessage = '[ Help Request ] Post Message',
  PostHelpRequestMessageSuccess = '[ Help Request ] Post Message Success',
  PostHelpRequestMessageFailure = '[ Help Request ] Post Message Failure',
  ShortPollHelpRequestMessages = '[ Help Request ] Short Poll Messages',
  ShortPollHelpRequestMessagesSuccess = '[ Help Request ] Short Poll Messages Success',
  ShortPollHelpRequestMessagesFailure = '[ Help Request ] Short Poll Messages Failure',
}

export class LoadHelpRequest implements Action {
  readonly type = HelpRequestActionTypes.LoadHelpRequest;

  constructor(public payload: string) {
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

export class MarkHelpRequestAsDone implements Action {
  readonly type = HelpRequestActionTypes.MarkHelpRequestAsDone;

  constructor(public payload: string) {
  }
}

export class MarkHelpRequestAsDoneSuccess implements Action {
  readonly type = HelpRequestActionTypes.MarkHelpRequestAsDoneSuccess;
}

export class MarkHelpRequestAsDoneFailure implements Action {
  readonly type = HelpRequestActionTypes.MarkHelpRequestAsDoneSuccess;
}

export class LoadHelpRequestMessages implements Action {
  readonly type = HelpRequestActionTypes.LoadHelpRequestMessages;

  constructor(public payload: string) {} // help-request id
}

export class LoadHelpRequestMessagesSuccess implements Action {
  readonly type = HelpRequestActionTypes.LoadHelpRequestMessagesSuccess;

  constructor(public payload: Message[]) {}
}

export class LoadHelpRequestMessagesFailure implements Action {
  readonly type = HelpRequestActionTypes.LoadHelpRequestMessagesFailure;
}

export class PostHelpRequestMessage implements Action {
  readonly type = HelpRequestActionTypes.PostHelpRequestMessage;

  constructor(public payload: { message: MessageInputDto, id: string }) {}
}

export class PostHelpRequestMessageSuccess implements Action {
  readonly type = HelpRequestActionTypes.PostHelpRequestMessageSuccess;

  constructor(public payload: Message) {}
}

export class PostHelpRequestMessageFailure implements Action {
  readonly type = HelpRequestActionTypes.PostHelpRequestMessageFailure;
}

export class ShortPollHelpRequestMessages implements Action {
  readonly type = HelpRequestActionTypes.ShortPollHelpRequestMessages;

  constructor(public payload: string) {}
}

export class ShortPollHelpRequestMessagesSuccess implements Action {
  readonly type = HelpRequestActionTypes.ShortPollHelpRequestMessagesSuccess;

  constructor(public payload: Message[]) {}
}

export class ShortPollHelpRequestMessagesFailure implements Action {
  readonly type = HelpRequestActionTypes.ShortPollHelpRequestMessagesFailure;
}

export type HelpRequestActionUnion = LoadHelpRequest
  | ShortPollHelpRequestMessages
  | ShortPollHelpRequestMessagesSuccess
  | ShortPollHelpRequestMessagesFailure
  | PostHelpRequestMessage
  | PostHelpRequestMessageSuccess
  | PostHelpRequestMessageFailure
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
  | ChangeListType
  | LoadHelpRequestMessages
  | LoadHelpRequestMessagesFailure
  | LoadHelpRequestMessagesSuccess
  | MarkHelpRequestAsDone
  | MarkHelpRequestAsDoneSuccess
  | MarkHelpRequestAsDoneFailure;
