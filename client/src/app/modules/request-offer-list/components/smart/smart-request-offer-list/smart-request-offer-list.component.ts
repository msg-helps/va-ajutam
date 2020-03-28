import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectListState, StateWithRequestOfferList,} from '../../../state/request-offer-list.reducer';
import {Observable} from 'rxjs';
import {ListModel, ListType} from '../../../request-offer-list.model';
import {ChangeListType} from '../../../state/request-offer-list.actions';

@Component({
  selector: 'app-smart-request-offer-list',
  template: `
      <div class="container" *ngIf="(isLoading$ | async) === false; else loadingContainer">
          <app-request-offer-list-header
                  [selectedListMenuType]="selectedListType$ | async"
                  (listTypeChange)="onListTypeChange($event)"></app-request-offer-list-header>
          <app-request-offer-list-content [itemList]="selectedListItems$ | async"
                                          (action)="onGoToDetails($event)"></app-request-offer-list-content>
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
  selectedListItems$: Observable<ListModel[]>;

  constructor(private store: Store<StateWithRequestOfferList>) {
  }

  ngOnInit(): void {
    this.selectedListType$ = this.store.select(selectListState).pipe(select(state => state.selectedListType));
    this.selectedListType$.subscribe(console.log);
    this.selectedListItems$ = this.store.select(selectListState).pipe(select(state => state.data));
    this.isLoading$ = this.store.select(selectListState).pipe(select(state => state.loading));
  }

  onListTypeChange(type: ListType) {
    this.store.dispatch(new ChangeListType(type));
  }

  onGoToDetails(id: number) {

  }
}
