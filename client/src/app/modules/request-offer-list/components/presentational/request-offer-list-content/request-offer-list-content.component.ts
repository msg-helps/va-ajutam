import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-request-offer-list-content',
  template: `
      <div class="container p-0 mr-0">
          <ul class="list-group list-group-flush">
              <li class="list-group-item">
                  <app-request-offer-list-item></app-request-offer-list-item>
              </li>
              <li class="list-group-item">
                  <app-request-offer-list-item></app-request-offer-list-item>
              </li>
              <li class="list-group-item">
                  <app-request-offer-list-item></app-request-offer-list-item>
              </li>
          </ul>
      </div>
  `,
  styleUrls: ['./request-offer-list-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListContentComponent {

}
