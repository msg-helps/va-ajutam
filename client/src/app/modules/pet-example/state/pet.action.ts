import Pet from '../pet.model';
import {Action} from '@ngrx/store';

export enum PetActionTypes {
  LoadPet = '[Pet] Load',
  LoadPetSuccess = '[Pet] Load Success',
  LoadPetFailure = '[Pet] Load Failure',
  ResetPet = '[Pet] Reset'
}

export class LoadPet implements Action {
  readonly type = PetActionTypes.LoadPet;
}

export class LoadPetSuccess implements Action {
  readonly type = PetActionTypes.LoadPetSuccess;

  constructor(public payload: Pet) {
  }
}

export class LoadPetFailure implements Action {
  readonly type = PetActionTypes.LoadPetFailure;
}

export class ResetPet {
  readonly type = PetActionTypes.ResetPet;
}

export type PetActionUnion = LoadPet | ResetPet | LoadPetSuccess | LoadPetFailure;
