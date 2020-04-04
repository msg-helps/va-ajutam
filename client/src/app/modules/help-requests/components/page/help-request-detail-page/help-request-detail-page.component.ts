import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-help-request-detail-page',
  template: `
    <div class="container">
      <button class="btn btn-sm btn-outline-primary my-3" [routerLink]="'../'">BACK PH</button>

      <app-smart-help-request-detail></app-smart-help-request-detail>
    </div>
  `,
  styleUrls: ['./help-request-detail-page.component.scss']
})
export class HelpRequestDetailPageComponent {}
