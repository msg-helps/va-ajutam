import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import State from '../../../../../shared/state/state';
import {LoadUser} from '../../../../../shared/user/state/user.action';

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
export class HelpRequestDetailPageComponent implements OnInit {
  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadUser());
  }
}
