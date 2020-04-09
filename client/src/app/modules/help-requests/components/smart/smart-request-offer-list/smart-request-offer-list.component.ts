import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ListType} from '../../../help-requests.model';
import HelpRequest from '../../../../../shared/model/help-request.model';
import HelpOffer from '../../../../../shared/model/help-offer.model';
import {selectHelpRequestState, StateWithHelpRequest} from '../../../state/help-request.reducer';
import {ChangeListType} from '../../../state/help-request.action';

@Component({
  selector: 'app-smart-request-offer-list',
  template: `
      <div class="container" *ngIf="(isLoading$ | async) === false; else loadingContainer">
          <app-request-offer-list-header
                  [selectedListMenuType]="selectedListType$ | async"
                  (listTypeChange)="onListTypeChange($event)"></app-request-offer-list-header>
          <app-request-offer-list-content [offers]="offersListItem$ | async"
                                          [requests]="requestsListItem$ | async"
                                          [type]="selectedListType$ | async"></app-request-offer-list-content>
      </div>
      <div>
          <ng-template #loadingContainer>
              <app-loading-spinner-component></app-loading-spinner-component>
          </ng-template>
      </div>
  `,
  styleUrls: ['./smart-request-offer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartRequestOfferListComponent implements OnInit {

  selectedListType$: Observable<ListType>;
  isLoading$: Observable<boolean>;
  requestsListItem$: Observable<HelpRequest[]>;
  offersListItem$: Observable<HelpOffer[]>;

  constructor(private store: Store<StateWithHelpRequest>) {
  }

  ngOnInit(): void {
    this.selectedListType$ = this.store.select(selectHelpRequestState).pipe(select(state => state.selectedListType));
    this.requestsListItem$ = this.store.select(selectHelpRequestState).pipe(select(state => state.requests));
    this.offersListItem$ = this.store.select(selectHelpRequestState).pipe(select(state => state.offers));
    this.isLoading$ = this.store.select(selectHelpRequestState).pipe(select(state => state.loading));
  }

  onListTypeChange(type: ListType) {
    this.store.dispatch(new ChangeListType(type));
  }
}
