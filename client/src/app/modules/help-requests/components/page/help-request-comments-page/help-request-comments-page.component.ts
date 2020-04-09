import {Component} from '@angular/core';

@Component({
  selector: 'app-help-request-comments-page',
  template: `
    <div class="container">
      <button class="btn btn-sm btn-link mt-2 mb-1" [routerLink]="'../'">Inapoi</button>
      <app-smart-help-request-comments></app-smart-help-request-comments>
    </div>
  `
})
export class HelpRequestCommentsPageComponent {}
