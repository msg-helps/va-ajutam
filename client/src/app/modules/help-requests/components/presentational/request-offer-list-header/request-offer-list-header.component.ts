import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ListType} from '../../../help-requests.model';

@Component({
  selector: 'app-request-offer-list-header',
  template: `
      <div class="container p-0 mr-0">
          <div class="row mr-0 ml-0 text-right">
              <div class="col">
                  <div ngbDropdown>
                      <button class="btn btn-outline-primary list-dropdown" id="listTypeDropdown" ngbDropdownToggle *ngIf="selectedListMenuType">
                          {{selectedListMenuType}}
                      </button>
                      <div ngbDropdownMenu aria-labelledby="listTypeDropdown">
                          <button ngbDropdownItem [disabled]="selectedListMenuType===listItemTypes.offers" (click)="listTypeChange.emit(listItemTypes.offers)">Show offers</button>
                          <button ngbDropdownItem [disabled]="selectedListMenuType!==listItemTypes.offers"  (click)="listTypeChange.emit(listItemTypes.requests)">Show requests</button>
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
  @Input() selectedListMenuType: ListType;
  @Output() listTypeChange: EventEmitter<ListType> = new EventEmitter<ListType>();

  listItemTypes = {
    offers: ListType.OFFERS,
    requests: ListType.REQUESTS
  };

  constructor() {
  }

}
