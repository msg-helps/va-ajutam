import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import User from '../../../../shared/model/user.model';
import { LoadUser } from '../../../user-profile-page/state/user.action';
import { selectUserState, StateWithUser } from '../../../user-profile-page/state/user.reducer';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'smart-user-profile-page',
  template: `
    <app-user-profile-page
      [userGroup]="userGroup">
    </app-user-profile-page>
    <br>
    <app-user-profile-action
      [isAdmin]="isAdmin"
      [isBanned]="isBanned"
      (banUser)="banUser()"
      (unbanUser)="unbanUser()"
      (deleteUser)="deleteUser()">
    </app-user-profile-action>
    <span *ngIf="isLoading$ | async" class="alert alert-info mt-5">Loading user...</span>
    <span *ngIf="hasError$ | async" class="alert alert-danger mt-5">Could not load user...</span>`,
  styleUrls: ['./smart-user-profile-page.scss']
})
export class SmartUserProfilePageComponent implements OnInit {
  user$: Observable<User>;
  hasError$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  userGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    organization: new FormControl(),
    region: new FormControl()
  });
  isBanned: boolean;
  isAdmin: boolean;

  constructor(private store: Store<StateWithUser>) { }

  ngOnInit(): void {

    this.user$ = this.store.select(selectUserState).pipe(select(userState => userState.data));
    this.hasError$ = this.store.select(selectUserState).pipe(select(userState => userState.error));
    this.isLoading$ = this.store.select(selectUserState).pipe(select(userState => userState.loading));

    this.user$.subscribe( user => 
      { this.userGroup.patchValue(
          { firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            organization: user.organization,
            region: user.region
          });
        this.isBanned = user.isBanned;
        this.isAdmin = user.isAdmin 
      })
  }

  loadAnotherUser(){
    this.store.dispatch(new LoadUser());
  }

  banUser(){
    alert('BAN! ' + this.userGroup.get('firstName').value);
  }

  unbanUser(){
    alert('UNBAN! ' + this.userGroup.get('firstName').value);
  }

  deleteUser(){
    alert('DELETE! ' + this.userGroup.get('firstName').value);
  }

}
