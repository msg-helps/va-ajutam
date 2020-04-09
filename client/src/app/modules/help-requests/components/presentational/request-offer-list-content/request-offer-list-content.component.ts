import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import HelpRequest from '../../../../../shared/model/help-request.model';
import HelpOffer from '../../../../../shared/model/help-offer.model';
import {ListType} from '../../../help-requests.model';

@Component({
  selector: 'app-request-offer-list-content',
  template: `
      <div class="container p-0 mr-0">
          <div *ngIf="type===listItemTypes.offers; else requestsList">
              <ul class="list-group list-group-flush" *ngIf="offers.length > 0">
                  <li class="list-group-item" *ngFor="let offer of offers">
                      <app-offer-list-item [item]="offer"></app-offer-list-item>
                  </li>
              </ul>
          </div>
          <ng-template #requestsList>
              <ul class="list-group list-group-flush" *ngIf="requests.length > 0">
                  <li class="list-group-item" *ngFor="let request of requests">
                      <app-request-list-item [item]="request"></app-request-list-item>
                  </li>
              </ul>
          </ng-template>
      </div>
  `,
  styleUrls: ['./request-offer-list-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListContentComponent {
  @Input() offers: HelpOffer[];
  @Input() requests: HelpRequest[];
  @Input() type: ListType;

  listItemTypes = {
    offers: ListType.OFFERS,
    requests: ListType.REQUESTS
  };
}
