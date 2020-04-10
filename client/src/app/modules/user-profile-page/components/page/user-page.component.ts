import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadUser} from '../../../../shared/user/state/user.action';
import State from '../../../../shared/state/state';

@Component({
  selector: 'app-user-page',
  template: `
      <div class="container-fluid">
          <app-smart-user-profile-page></app-smart-user-profile-page>
      </div>
  `,
})
export class UserPageComponent implements OnInit {

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadUser());
  }

}
