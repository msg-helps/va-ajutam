import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { StateWithUser } from '../../state/user.reducer';
import { LoadUser } from '../../state/user.action';

@Component({
  selector: 'app-user-page',
  template: `
    <div class="container-fluid">
      <smart-user-profile-page></smart-user-profile-page>
    </div>
  `,
})
export class UserPageComponent implements OnInit{

    constructor(private store: Store<StateWithUser>) { }

    ngOnInit(){
        this.store.dispatch(new LoadUser());
    }

}