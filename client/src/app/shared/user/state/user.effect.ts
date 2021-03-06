import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import State from '../../state/state';
import { UserService } from '../user.service';
import { LoadUser, LoadUserSuccess, UserActionTypes, LoadUserFailure } from './user.action';

@Injectable()
export class UserEffects {
  public constructor(private actions$: Actions, private store: Store<State>, private userService: UserService) {}

  @Effect()
  public loadUser$ = this.actions$.pipe(
    ofType<LoadUser>(UserActionTypes.LoadUser),
    switchMap(() => this.userService.getUser()),
    map( user => new LoadUserSuccess(user)),
    catchError(() => [new LoadUserFailure()])
  );
}
