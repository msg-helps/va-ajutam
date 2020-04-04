import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, tap } from 'rxjs/operators';
import State from '../../../shared/state/state';
import {HelpOfferRequestService} from '../createpage.service';
import {
  LoadHelpOfferRequest,
  LoadHelpOfferRequestSuccess,
  LoadHelpOfferRequestFailure,
  SaveHelpOfferRequest,
  SaveHelpOfferRequestSuccess,
  SaveHelpOfferRequestFailure,
  HelpOfferRequestActionTypes
} from './createpage.action';

@Injectable()
export class HelpOfferRequestEffects {
  public constructor(
    private actions$: Actions,
    private store: Store<State>,
    private service: HelpOfferRequestService,
    private router: Router
  ) { }

  @Effect()
  public loadHelpOfferRequest$ = this.actions$.pipe(
    ofType<LoadHelpOfferRequest>(HelpOfferRequestActionTypes.LoadHelpOfferRequest),
    switchMap(() => this.service.loadHelpOfferRequest()
      .then(result => new LoadHelpOfferRequestSuccess(result))
      .catch(() => new LoadHelpOfferRequestFailure()))
  );

  @Effect({ dispatch: false })
  public loadHelpOfferRequestFailure$ = this.actions$.pipe(
    ofType<LoadHelpOfferRequestFailure>(HelpOfferRequestActionTypes.LoadHelpOfferRequestFailure),
    tap(() => this.router.navigate(['/help-requests']))
  );

  @Effect()
  public saveHelpOfferRequest$ = this.actions$.pipe(
    ofType<SaveHelpOfferRequest>(HelpOfferRequestActionTypes.SaveHelpOfferRequest),
    switchMap((action) => this.service.saveHelpOfferRequest(action.payload)
      .then(result => new SaveHelpOfferRequestSuccess())
      .catch(() => new SaveHelpOfferRequestFailure()))
  );


}
