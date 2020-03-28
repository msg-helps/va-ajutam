import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import State from '../../../shared/state/state';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {RequestOfferListService} from '../request-offer-list.service';
import {
  ChangeListType,
  LoadOffers,
  LoadOffersSuccess,
  LoadRequestOfferFailure,
  LoadRequests,
  LoadRequestsSuccess,
  RequestOfferListActionTypes
} from './request-offer-list.actions';
import {ListType} from '../request-offer-list.model';

@Injectable()
export class RequestOfferListEffects {
  public constructor(private actions$: Actions, private store: Store<State>, private requestOfferListService: RequestOfferListService) {
  }

  @Effect()
  public loadRequests$ = this.actions$.pipe(
    ofType<LoadRequests>(RequestOfferListActionTypes.LoadRequests),
    switchMap(() => this.requestOfferListService.getAllRequests()),
    map(requests => new LoadRequestsSuccess(requests)),
    catchError(() => [new LoadRequestOfferFailure()])
  );

  @Effect()
  public loadOffers$ = this.actions$.pipe(
    ofType<LoadOffers>(RequestOfferListActionTypes.LoadOffers),
    switchMap(() => this.requestOfferListService.getAllOffers()),
    map(requests => new LoadOffersSuccess(requests)),
    catchError(() => [new LoadRequestOfferFailure()])
  );

  @Effect({dispatch: false})
  public loadFailure$ = this.actions$.pipe(
    ofType<LoadRequestOfferFailure>(RequestOfferListActionTypes.LoadRequestOfferFailure),
    tap(() => console.log('Loading Requests/Offers Failure'))
  );

  @Effect()
  public changeListType$ = this.actions$.pipe(
    ofType<ChangeListType>(RequestOfferListActionTypes.ChangeListType),
    map(action => action.payload),
    map(listType => listType === ListType.OFFERS ? new LoadOffers() : new LoadRequests())
  );
}
