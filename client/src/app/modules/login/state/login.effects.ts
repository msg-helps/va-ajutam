import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {switchMap} from 'rxjs/operators';
import State from '../../../shared/state/state';
import {Login, LoginActionTypes} from './login.actions';
import {AuthService} from '../../../shared/auth.service';

@Injectable()
export class LoginEffects {
  public constructor(private actions$: Actions, private store: Store<State>, private service: AuthService) {
  }

  @Effect({dispatch: false})
  public performLogin$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.Login),
    switchMap(({provider}) => this.service.doLogin(provider))
  );
}
