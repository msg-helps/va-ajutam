import {Component} from '@angular/core';

@Component({
  selector: 'app-help-request-detail-page',
  template: `
    <div class="container">
        <div class="row mt-2 mb-1">
          <div class="col-6">
          <button class="btn btn-sm btn-link" [routerLink]="'../'">Inapoi</button>
        </div>
          <div class="col-6 text-right">
            <button class="btn btn-sm btn-link" [routerLink]="'./comments'">Vezi Comentarii</button>
          </div>
        </div>
      <app-smart-help-request-detail></app-smart-help-request-detail>
    </div>
  `,
  styleUrls: ['./help-request-detail-page.component.scss']
})
export class HelpRequestDetailPageComponent {}
