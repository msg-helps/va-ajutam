import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ListModel} from '../../../request-offer-list.model';

@Component({
  selector: 'app-request-offer-list-content',
  template: `
      <div class="container p-0 mr-0">
          <ul class="list-group list-group-flush" *ngIf="itemList.length > 0">
              <li class="list-group-item" *ngFor="let item of itemList">
                  <app-request-offer-list-item [item]="item" (action)="action.emit($event)"></app-request-offer-list-item>
              </li>
          </ul>
      </div>
  `,
  styleUrls: ['./request-offer-list-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListContentComponent {
  @Input() itemList: ListModel[];
  @Output() action: EventEmitter<number> = new EventEmitter<number>();
}
