import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import State from '../../../shared/state/state';
import {HelpRequestsService} from '../help-requests.service';
import {
  ChangeListType,
  ConvertHelpRequestAddressToCoordsFailure,
  ConvertHelpRequestAddressToCoordsSuccess,
  HelpRequestActionTypes,
  LoadHelpRequest,
  LoadHelpRequestFailure,
  LoadHelpRequestSuccess,
  LoadOffers,
  LoadOffersSuccess,
  LoadRequestOfferFailure,
  LoadRequests,
  LoadRequestsSuccess,
  MarkHelpRequestAsDone,
  MarkHelpRequestAsDoneFailure,
  MarkHelpRequestAsDoneSuccess
} from './help-request.action';
import {ListType} from '../help-requests.model';
import {of} from 'rxjs';

@Injectable()
export class HelpRequestEffects {
  public constructor(
    private actions$: Actions,
    private store: Store<State>,
    private service: HelpRequestsService,
    private router: Router
  ) {
  }

  @Effect()
  public loadHelpRequest$ = this.actions$.pipe(
    ofType<LoadHelpRequest>(HelpRequestActionTypes.LoadHelpRequest),
    map(action => action.payload),
    switchMap(id => this.service.loadHelpRequest(id)
      .then(result => new LoadHelpRequestSuccess(result))
      .catch(() => new LoadHelpRequestFailure()))
  );

  @Effect({dispatch: false})
  public loadHelpRequestFailure$ = this.actions$.pipe(
    ofType<LoadHelpRequestFailure>(HelpRequestActionTypes.LoadHelpRequestFailure),
    tap(() => this.router.navigate(['/help-requests']))
  );

  @Effect()
  public loadHelpRequestSuccess$ = this.actions$.pipe(
    ofType<LoadHelpRequestSuccess>(HelpRequestActionTypes.LoadHelpRequestSuccess),
    switchMap((action: LoadHelpRequestSuccess) => this.service.getCoordsForAddress(action.payload.address)
      .then(result => new ConvertHelpRequestAddressToCoordsSuccess({coords: result}))
      .catch(() => new ConvertHelpRequestAddressToCoordsFailure())
    )
  );

  @Effect()
  public loadRequests$ = this.actions$.pipe(
    ofType<LoadRequests>(HelpRequestActionTypes.LoadRequests),
    switchMap(() => this.service.getAllRequests()),
    map(requests => new LoadRequestsSuccess(requests)),
    catchError(() => [new LoadRequestOfferFailure()])
  );

  @Effect()
  public loadOffers$ = this.actions$.pipe(
    ofType<LoadOffers>(HelpRequestActionTypes.LoadOffers),
    switchMap(() => this.service.getAllOffers()),
    map(requests => new LoadOffersSuccess(requests)),
    catchError(() => [new LoadRequestOfferFailure()])
  );

  @Effect({dispatch: false})
  public loadFailure$ = this.actions$.pipe(
    ofType<LoadRequestOfferFailure>(HelpRequestActionTypes.LoadRequestOfferFailure),
    tap(() => console.log('Loading Requests/Offers Failure'))
  );

  @Effect()
  public changeListType$ = this.actions$.pipe(
    ofType<ChangeListType>(HelpRequestActionTypes.ChangeListType),
    map(action => action.payload),
    map(listType => listType === ListType.OFFERS ? new LoadOffers() : new LoadRequests())
  );

  @Effect()
  public markHelpRequestAsDone$ = this.actions$.pipe(
    ofType<MarkHelpRequestAsDone>(HelpRequestActionTypes.MarkHelpRequestAsDone),
    map(action => action.payload),
    switchMap(id => this.service.markHelpRequestAsDone(id).pipe(
      map(() => new MarkHelpRequestAsDoneSuccess()),
      catchError(() => of(new MarkHelpRequestAsDoneFailure()))
    ))
  );

  @Effect({dispatch: false})
  public markHelpRequestAsDoneSuccess$ = this.actions$.pipe(
    ofType<MarkHelpRequestAsDoneSuccess>(HelpRequestActionTypes.MarkHelpRequestAsDoneSuccess),
    tap(() => this.router.navigateByUrl('/help-requests'))
  );
}
