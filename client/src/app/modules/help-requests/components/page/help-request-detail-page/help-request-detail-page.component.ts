import {Component} from '@angular/core';

@Component({
  selector: 'app-help-request-detail-page',
  template: `
    <div class="container">
        <div class="row my-3">
          <div class="col-6">
          <button class="btn btn-sm btn-outline-primary" [routerLink]="'../'">BACK PH</button>
        </div>
          <div class="col-6 text-right">
            <button class="btn btn-sm btn-link comments-link" [routerLink]="'./comments'">Vezi Comentarii</button>
          </div>
        </div>
      <app-smart-help-request-detail></app-smart-help-request-detail>
    </div>
  `,
  styleUrls: ['./help-request-detail-page.component.scss']
})
export class HelpRequestDetailPageComponent {}
