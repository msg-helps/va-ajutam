import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RequestOfferListState} from '../../../state/request-offer-list.reducer';
import {LoadOffers} from '../../../state/request-offer-list.actions';

@Component({
  selector: 'app-request-offer-list-page',
  template: `
      <div class="container-fluid pt-3">
          <app-smart-request-offer-list></app-smart-request-offer-list>
      </div>
  `,
  styleUrls: ['./request-offer-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListPageComponent implements OnInit {
  constructor(private store: Store<RequestOfferListState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadOffers());
  }

}
