import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ListModel} from '../../../request-offer-list.model';

@Component({
  selector: 'app-request-offer-list-item',
  template: `
      <div class="container p-0 ml-0 mr-0 w-100">
          <div class="row mr-0 ml-0" *ngIf="item">
              <div class="card w-100">
                  <div class="card-body">
                      <h5 class="card-title"><b>{{item.requestedBy.name}}</b>: {{item.title}}</h5>
                      <span class="badge badge-pill badge-secondary">{{item.creationDate.toLocaleString()}}</span>
                      <span class="badge badge-pill badge-danger ml-1">Volunteers: {{item.participantsCount}}
                          pers.</span>
                      <p class="card-text">{{item.shortDescription}}</p>
                      <a class="btn btn-primary" (click)="action.emit(item.id)">Read more</a>
                  </div>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./request-offer-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListItemComponent {
  @Input() item: ListModel;
  @Output() action: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

}
