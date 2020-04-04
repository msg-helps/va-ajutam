import {Action} from '@ngrx/store';
import HelpRequest from '../../../shared/model/help-request.model';

export enum HelpRequestActionTypes {
  LoadHelpRequest = '[Help Request] Load',
  LoadHelpRequestSuccess = '[Help Request] Load Success',
  LoadHelpRequestFailure = '[Help Request] Load Failure',
  ConvertHelpRequestAddressToCoords = '[Help Request] Convert address to coords',
  ConvertHelpRequestAddressToCoordsSuccess = '[Help Request] Convert address to coords success',
  ConvertHelpRequestAddressToCoordsFailure = '[Help Request] Convert address to coords failure',
}

export class LoadHelpRequest implements Action {
  readonly type = HelpRequestActionTypes.LoadHelpRequest;

  constructor(public payload: { id: string; }) {}
}

export class LoadHelpRequestSuccess implements Action  {
  readonly type = HelpRequestActionTypes.LoadHelpRequestSuccess;

  constructor(public payload: HelpRequest) {}
}

export class LoadHelpRequestFailure implements Action  {
  readonly type = HelpRequestActionTypes.LoadHelpRequestFailure;
}

export class ConvertHelpRequestAddressToCoords implements Action  {
  readonly type = HelpRequestActionTypes.ConvertHelpRequestAddressToCoords;

  constructor(public payload: { address: string }) {}
}

export class ConvertHelpRequestAddressToCoordsSuccess implements Action  {
  readonly type = HelpRequestActionTypes.ConvertHelpRequestAddressToCoordsSuccess;

  constructor(public payload: { coords: [number, number] }) {}
}

export class ConvertHelpRequestAddressToCoordsFailure implements Action  {
  readonly type = HelpRequestActionTypes.ConvertHelpRequestAddressToCoordsFailure;
}


export type HelpRequestActionUnion = LoadHelpRequest
  | LoadHelpRequestSuccess
  | LoadHelpRequestFailure
  | ConvertHelpRequestAddressToCoords
  | ConvertHelpRequestAddressToCoordsFailure
  | ConvertHelpRequestAddressToCoordsSuccess;
