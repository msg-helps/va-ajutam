import User from '../../model/user.model';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUser = '[User] Load',
  LoadUserSuccess = '[User] Load Success',
  LoadUserFailure = '[User] Load Failure',
  ResetUser = '[User] Reset',
  MarkUserAsBanned = '[User] Mark User as banned',
  MarkUserAsBannedSuccess = '[User] Mark User as banned Success',
  MarkUserAsBannedFailure = '[User] Mark User as banned Failure',
  MarkUserAsNotBanned = '[User] Mark User as not banned',
  MarkUserAsNotBannedSuccess = '[User] Mark User as not banned Success',
  MarkUserAsNotBannedFailure = '[User] Mark User as not banned Failure',
  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] User Update Success',
  UpdateUserFailure = '[User] User Update Failure'
}

export class LoadUser {
  readonly type = UserActionTypes.LoadUser;
}

export class LoadUserSuccess {
  readonly type = UserActionTypes.LoadUserSuccess;

  constructor(public payload: User) {}
}

export class LoadUserFailure {
  readonly type = UserActionTypes.LoadUserFailure;
}

export class ResetUser {
  readonly type = UserActionTypes.ResetUser;
}

export class MarkUserAsBanned implements Action {
  readonly type = UserActionTypes.MarkUserAsBanned;

  constructor(public payload: string) {
  }
}

export class MarkUserAsBannedSuccess implements Action {
  readonly type = UserActionTypes.MarkUserAsBannedSuccess;

  constructor(public payload: User) {}
}

export class MarkUserAsBannedFailure implements Action {
  readonly type = UserActionTypes.MarkUserAsBannedFailure;
}

export class MarkUserAsNotBanned implements Action {
  readonly type = UserActionTypes.MarkUserAsNotBanned;

  constructor(public payload: string) {
  }
}

export class MarkUserAsNotBannedSuccess implements Action {
  readonly type = UserActionTypes.MarkUserAsNotBannedSuccess;

  constructor(public payload: User) {}
}

export class MarkUserAsNotBannedFailure implements Action {
  readonly type = UserActionTypes.MarkUserAsNotBannedFailure;
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;

  constructor(public payload: User) {
  }
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateUserSuccess;

  constructor(public payload: User) {}
}

export class UpdateUserFailure implements Action {
  readonly type = UserActionTypes.UpdateUserFailure;
}

export type UserActionUnion = 
  LoadUser 
| ResetUser
| LoadUserSuccess
| LoadUserFailure
| MarkUserAsBanned
| MarkUserAsBannedSuccess
| MarkUserAsBannedFailure
| MarkUserAsNotBanned
| MarkUserAsNotBannedSuccess
| MarkUserAsNotBannedFailure
| UpdateUser
| UpdateUserSuccess
| UpdateUserFailure
;
