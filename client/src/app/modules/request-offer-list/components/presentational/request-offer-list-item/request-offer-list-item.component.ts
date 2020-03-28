import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-request-offer-list-item',
  template: `
      <div class="container p-0 ml-0 mr-0 w-100">
          <div class="row mr-0 ml-0">
              <div class="card w-100">
                  <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <span class="badge badge-pill badge-secondary">29.07.2018</span>
                      <span class="badge badge-pill badge-danger ml-1">Volunteers: 3 pers.</span>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Read more</a>
                  </div>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./request-offer-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListItemComponent {
  constructor() {
  }

}
