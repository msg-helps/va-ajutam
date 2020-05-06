import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {catchError, delay, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import State from '../../../shared/state/state';
import {ListType} from '../help-requests.model';
import {HelpRequestsService} from '../help-requests.service';
import {
  ChangeListType,
  ConvertHelpRequestAddressToCoordsFailure,
  ConvertHelpRequestAddressToCoordsSuccess,
  HelpRequestActionTypes,
  LoadHelpRequest,
  LoadHelpRequestFailure,
  MarkHelpRequestAsDone,
  MarkHelpRequestAsDoneFailure,
  MarkHelpRequestAsDoneSuccess,
  LoadHelpRequestMessages,
  LoadHelpRequestMessagesFailure,
  LoadHelpRequestMessagesSuccess,
  LoadHelpRequestSuccess,
  LoadOffers,
  LoadOffersSuccess,
  LoadRequestOfferFailure,
  LoadRequests,
  LoadRequestsSuccess,
  PostHelpRequestMessage,
  PostHelpRequestMessageFailure,
  PostHelpRequestMessageSuccess,
  ShortPollHelpRequestMessages,
  ShortPollHelpRequestMessagesFailure,
  ShortPollHelpRequestMessagesSuccess
} from './help-request.action';
import {selectHelpRequestState} from './help-request.reducer';
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
    switchMap(action => this.service.loadHelpRequest(action.payload.id)
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


  @Effect()
  public loadHelpRequestMessages$ = this.actions$.pipe(
    ofType<LoadHelpRequestMessages>(HelpRequestActionTypes.LoadHelpRequestMessages),
    switchMap(action => this.service.loadMessages(action.payload)),
    map(result => new LoadHelpRequestMessagesSuccess(result)),
    catchError(() => [new LoadHelpRequestMessagesFailure()])
  );

  @Effect()
  public postHelpRequestMessage$ = this.actions$.pipe(
    ofType<PostHelpRequestMessage>(HelpRequestActionTypes.PostHelpRequestMessage),
    switchMap(action => this.service.postMessage(action.payload.id, action.payload.message)),
    map(result => new PostHelpRequestMessageSuccess(result)),
    catchError(() => [new PostHelpRequestMessageFailure()])
  );

  @Effect()
  public shortPollHelpRequestMessage$ = this.actions$.pipe(
    ofType<ShortPollHelpRequestMessages>(HelpRequestActionTypes.ShortPollHelpRequestMessages),
    delay(5000),
    withLatestFrom(this.store.select(selectHelpRequestState).pipe(
      select(state => state.messages),
      map(messages => messages.length === 0 ? new Date(0) : messages.slice(-1)[0].createdAt)
    )),
    switchMap(([action, lastMessageCreatedAt]) =>
      this.service.loadNewMessages(action.payload, lastMessageCreatedAt)
        .then(messages => [new ShortPollHelpRequestMessagesSuccess(messages), new ShortPollHelpRequestMessages(action.payload)])
        .catch(() => [new ShortPollHelpRequestMessagesFailure()])),
    switchMap(x => x)
  );
}
