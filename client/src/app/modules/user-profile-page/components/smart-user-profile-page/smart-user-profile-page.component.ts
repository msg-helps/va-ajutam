import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import User from '../../../../shared/model/user.model';
import {LoadUser, MarkUserAsBanned, MarkUserAsNotBanned} from '../../../../shared/user/state/user.action';
import {selectUserState} from '../../../../shared/user/state/user.reducer';
import {FormControl, FormGroup} from '@angular/forms';
import State from '../../../../shared/state/state';

@Component({
  selector: 'app-smart-user-profile-page',
  template: `
    <app-user-profile-page
      [userGroup]="userGroup">
    </app-user-profile-page>
    <br>
    <app-user-profile-action
      [user]="user$ | async"
      (banUser)="banUser($event)"
      (unbanUser)="unbanUser($event)"
      (deleteUser)="deleteUser($event)">
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

  constructor(private store: Store<State>) {
  }

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
      })
  }

  loadAnotherUser() {
    this.store.dispatch(new LoadUser());
  }

  banUser(id: string){
    //alert('BAN! ' + this.userGroup.get('firstName').value);
    console.log(id);
    this.store.dispatch(new MarkUserAsBanned(id));
  }

  unbanUser(id: string){
    //alert('UNBAN! ' + this.userGroup.get('firstName').value);
    console.log(id);
    this.store.dispatch(new MarkUserAsNotBanned(id));
  }

  deleteUser(id: string){
    alert('DELETE! ' + this.userGroup.get('firstName').value);
  }

}
