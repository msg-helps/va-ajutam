import {Action} from '@ngrx/store';
import BaseHelp from '../../../shared/model/help.model';

export enum HelpOfferRequestActionTypes {
  LoadHelpOfferRequest = '[Help Offer Request] Load',
  LoadHelpOfferRequestSuccess = '[Help  Offer Request] Load Success',
  LoadHelpOfferRequestFailure = '[Help Offer Request] Load Failure',
  SaveHelpOfferRequest = '[Help Offer Request] Save',
  SaveHelpOfferRequestSuccess = '[Help Offer Request] Save Success',
  SaveHelpOfferRequestFailure = '[Help Offer Request] Save Failure'
}

export class LoadHelpOfferRequest implements Action {
  readonly type = HelpOfferRequestActionTypes.LoadHelpOfferRequest;

  constructor(public payload: { id: string; }) {}
}

export class LoadHelpOfferRequestSuccess implements Action  {
  readonly type = HelpOfferRequestActionTypes.LoadHelpOfferRequestSuccess;

  constructor(public payload: BaseHelp) {}
}

export class LoadHelpOfferRequestFailure implements Action  {
  readonly type = HelpOfferRequestActionTypes.LoadHelpOfferRequestFailure;
}

export class SaveHelpOfferRequest implements Action  {
  readonly type = HelpOfferRequestActionTypes.SaveHelpOfferRequest;

  constructor(public payload: BaseHelp) {}
}

export class SaveHelpOfferRequestSuccess implements Action  {
  readonly type = HelpOfferRequestActionTypes.SaveHelpOfferRequestSuccess;
}

export class SaveHelpOfferRequestFailure implements Action  {
  readonly type = HelpOfferRequestActionTypes.SaveHelpOfferRequestFailure;
}


export type HelpOfferRequestActionUnion = LoadHelpOfferRequest
  | LoadHelpOfferRequestSuccess
  | LoadHelpOfferRequestFailure
  | SaveHelpOfferRequest
  | SaveHelpOfferRequestSuccess
  | SaveHelpOfferRequestFailure;
