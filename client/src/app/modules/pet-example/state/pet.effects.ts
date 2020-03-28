import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import State from '../../../shared/state/state';
import {PetService} from '../pet.service';
import {LoadPet, LoadPetSuccess, PetActionTypes, LoadPetFailure} from './pet.action';

@Injectable()
export class PetEffects {
  public constructor(private actions$: Actions, private store: Store<State>, private petService: PetService) {}

  @Effect()
  public loadPet$ = this.actions$.pipe(
    ofType<LoadPet>(PetActionTypes.LoadPet),
    switchMap(() => this.petService.loadRandomPet()),
    map(pet => new LoadPetSuccess(pet)),
    catchError(() => [new LoadPetFailure()])
  );
}
