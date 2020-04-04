import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import HelpOffer from '../../../../../shared/model/help-offer.model';

@Component({
  selector: 'app-offer-list-item',
  template: `
      <div class="container p-0 ml-0 mr-0 w-100">
          <div class="row mr-0 ml-0" *ngIf="item">
              <div class="card w-100">
                  <div class="card-body">
                      <h3 class="card-title">{{item.title}}</h3>
                      <h6 class="text-muted">{{item.user.firstName + ' ' + item.user.lastName}}</h6>
                      <span class="badge badge-pill badge-secondary">{{item.contactPhone.toLocaleString()}}</span>
                      <span class="badge badge-pill badge-danger ml-1">Quantity: {{item.quantity}}</span>
                      <p class="card-text">{{item.description}}</p>
                      <button class="btn btn-primary">Read more</button>
                  </div>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./offer-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferListItemComponent {
  @Input() item: HelpOffer;

  constructor() {
  }

}
