import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadOffers} from '../../../state/help-request.action';
import {StateWithHelpRequest} from '../../../state/help-request.reducer';

@Component({
  selector: 'app-request-offer-list-page',
  template: `
      <div class="container-fluid pt-3">
          <app-smart-request-offer-list></app-smart-request-offer-list>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListPageComponent implements OnInit {
  constructor(private store: Store<StateWithHelpRequest>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadOffers());
  }

}
