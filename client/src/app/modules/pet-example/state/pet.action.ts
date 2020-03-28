import Pet from '../pet.model';

export enum PetActionTypes {
  LoadPet = '[Pet] Load',
  LoadPetSuccess = '[Pet] Load Success',
  LoadPetFailure = '[Pet] Load Failure',
  ResetPet = '[Pet] Reset'
}

export class LoadPet {
  readonly type = PetActionTypes.LoadPet;
}

export class LoadPetSuccess {
  readonly type = PetActionTypes.LoadPetSuccess;

  constructor(public payload: Pet) {}
}

export class LoadPetFailure {
  readonly type = PetActionTypes.LoadPetFailure;
}

export class ResetPet {
  readonly type = PetActionTypes.ResetPet;
}

export type PetActionUnion = LoadPet | ResetPet | LoadPetSuccess | LoadPetFailure;
