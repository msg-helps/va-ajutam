import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import State from '../../state/state';
import { UserService } from '../user.service';
import { LoadUser, 
  LoadUserSuccess, 
  UserActionTypes, 
  LoadUserFailure,
  MarkUserAsBanned,
  MarkUserAsBannedSuccess,
  MarkUserAsBannedFailure,
  MarkUserAsNotBanned,
  MarkUserAsNotBannedSuccess,
  MarkUserAsNotBannedFailure,
  UpdateUser,
  UpdateUserSuccess,
  UpdateUserFailure
} from './user.action';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  public constructor(private actions$: Actions, private store: Store<State>, private userService: UserService, private router: Router) {}

  @Effect()
  public loadUser$ = this.actions$.pipe(
    ofType<LoadUser>(UserActionTypes.LoadUser),
    switchMap(() => this.userService.getUser()),
    map( user => new LoadUserSuccess(user)),
    catchError(() => [new LoadUserFailure()])
  );

  @Effect()
  public markUserAsBanned$ = this.actions$.pipe(
    ofType<MarkUserAsBanned>(UserActionTypes.MarkUserAsBanned),
    map(action => action.payload),
    switchMap(id => this.userService.markUserAsBanned(id).pipe(
      map( user => new MarkUserAsBannedSuccess(user)),
      catchError(() => of(new MarkUserAsBannedFailure()))
    ))
  );

  @Effect({dispatch: false})
  public markUserAsBannedSuccess$ = this.actions$.pipe(
    ofType<MarkUserAsBannedSuccess>(UserActionTypes.MarkUserAsBannedSuccess),
    tap(() => this.router.navigateByUrl('/user'))
  );

  @Effect()
  public markUserAsNotBanned$ = this.actions$.pipe(
    ofType<MarkUserAsNotBanned>(UserActionTypes.MarkUserAsNotBanned),
    map(action => action.payload),
    switchMap(id => this.userService.markUserAsNotBanned(id).pipe(
      map(user => new MarkUserAsNotBannedSuccess(user)),
      catchError(() => of(new MarkUserAsNotBannedFailure()))
    ))
  );

  @Effect({dispatch: false})
  public markUserAsNotBannedSuccess$ = this.actions$.pipe(
    ofType<MarkUserAsNotBannedSuccess>(UserActionTypes.MarkUserAsNotBannedSuccess),
    tap(() => this.router.navigateByUrl('/user'))
  );

  @Effect()
  public updateUser$ = this.actions$.pipe(
    ofType<UpdateUser>(UserActionTypes.UpdateUser),
    map(action => action.payload),
    switchMap(user => this.userService.updateUser(user).pipe(
      map(user => new UpdateUserSuccess(user)),
      catchError(() => of(new UpdateUserFailure()))
    ))
  );

  @Effect({dispatch: false})
  public updateUserSuccess$ = this.actions$.pipe(
    ofType<UpdateUserSuccess>(UserActionTypes.UpdateUserSuccess),
    tap(() => this.router.navigateByUrl('/user'))
  );

}
