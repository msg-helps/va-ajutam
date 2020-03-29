import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {switchMap, tap} from 'rxjs/operators';
import State from '../../../shared/state/state';
import {HelpRequestsService} from '../help-requests.service';
import {
  ConvertHelpRequestAddressToCoordsFailure,
  ConvertHelpRequestAddressToCoordsSuccess,
  HelpRequestActionTypes,
  LoadHelpRequest,
  LoadHelpRequestFailure,
  LoadHelpRequestSuccess
} from './help-request.action';

@Injectable()
export class HelpRequestEffects {
  public constructor(
    private actions$: Actions,
    private store: Store<State>,
    private service: HelpRequestsService,
    private router: Router
  ) {}

  @Effect()
  public loadHelpRequest$ = this.actions$.pipe(
    ofType<LoadHelpRequest>(HelpRequestActionTypes.LoadHelpRequest),
    switchMap(() => this.service.loadHelpRequest()
      .then(result => new LoadHelpRequestSuccess(result))
      .catch(() => new LoadHelpRequestFailure()))
  );

  @Effect({ dispatch: false })
  public loadHelpRequestFailure$ = this.actions$.pipe(
    ofType<LoadHelpRequestFailure>(HelpRequestActionTypes.LoadHelpRequestFailure),
    tap(() => this.router.navigate(['/help-requests']))
  );

  @Effect()
  public loadHelpRequestSuccess$ = this.actions$.pipe(
    ofType<LoadHelpRequestSuccess>(HelpRequestActionTypes.LoadHelpRequestSuccess),
    switchMap((action: LoadHelpRequestSuccess ) => this.service.getCoordsForAddress(action.payload.address)
      .then(result => new ConvertHelpRequestAddressToCoordsSuccess(result))
      .catch(() => new ConvertHelpRequestAddressToCoordsFailure())
    )
  );
}
