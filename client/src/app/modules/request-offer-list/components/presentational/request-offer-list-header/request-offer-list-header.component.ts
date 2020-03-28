import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ListType} from '../../../request-offer-list.model';

@Component({
  selector: 'app-request-offer-list-header',
  template: `
      <div class="container p-0 mr-0">
          <div class="row mr-0 ml-0 text-right">
              <div class="col">
                  <div ngbDropdown>
                      <button class="btn btn-outline-primary list-dropdown" id="listTypeDropdown" ngbDropdownToggle>
                          {{isOfferMenu ? listItemTypes.offers : listItemTypes.requests}}
                      </button>
                      <div ngbDropdownMenu aria-labelledby="listTypeDropdown">
                          <button ngbDropdownItem [disabled]="isOfferMenu">Show offers</button>
                          <button ngbDropdownItem [disabled]="!isOfferMenu">Show requests</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./request-offer-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListHeaderComponent {
  @Input() isOfferMenu = false;
  @Output() listTypeChane: EventEmitter<ListType> = new EventEmitter<ListType>();

  listItemTypes = {
    offers: ListType.OFFERS,
    requests: ListType.REQUESTS
  };

  constructor() {
  }

}
