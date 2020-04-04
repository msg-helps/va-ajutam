import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import HelpRequest from '../../../../../shared/model/help-request.model';

@Component({
  selector: 'app-request-list-item',
  template: `
      <div class="container p-0 ml-0 mr-0 w-100">
          <div class="row mr-0 ml-0" *ngIf="item">
              <div class="card w-100">
                  <div class="card-body">
                      <h5 class="card-title">{{item.title}}</h5>
                      <h6 class="text-muted">{{item.requestedFor}}</h6>
                      <span class="badge badge-pill badge-secondary">{{item.contactPhone.toLocaleString()}}</span>
                      <span class="badge badge-pill badge-danger ml-1">Volunteers: {{item.volunteers.length}}
                          pers.</span>
                      <p class="card-text">{{item.description}}</p>
                      <a class="btn btn-primary" routerLink="./{{item.id}}">Read more</a>
                  </div>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./request-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestListItemComponent {
  @Input() item: HelpRequest;

  constructor() {
  }

}
