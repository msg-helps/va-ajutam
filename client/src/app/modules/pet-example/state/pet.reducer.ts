import State from "../../../shared/state/state";
import Pet from '../pet.model';
import {PetActionTypes, PetActionUnion} from './pet.action';

export interface PetState {
  data: Pet;
  loading: boolean;
  error: boolean;
}

export interface StateWithPet extends State {
  pet: PetState;
}

export const initialState: PetState = {
  data: {
    name: 'Bucky',
    breed: 'Golden Retriever'
  },
  loading: false,
  error: false
};

export function petReducer(state = initialState, action: PetActionUnion): PetState {
  switch (action.type) {
    case PetActionTypes.ResetPet: {
      return {
        ...initialState
      };
    }
    case PetActionTypes.LoadPet: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case PetActionTypes.LoadPetSuccess: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    }
    case PetActionTypes.LoadPetFailure: {
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          breed: '',
          name: ''
        }
      };
    }
    default: {
      return state;
    }
  }
}
export const selectPetState = (state: StateWithPet) => state.pet;
