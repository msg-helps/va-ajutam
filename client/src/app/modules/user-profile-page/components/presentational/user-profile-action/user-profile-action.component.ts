import { Component, Input, Output, EventEmitter } from '@angular/core';
import User from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-profile-action',
  template: `
  <div *ngIf="user.isAdmin">
    <h2> Actions </h2>
    <div class="col-md-6 col-lg-6 well">
      <ng-container *ngIf="user.isAdmin && user.isBanned; then unban else ban"></ng-container>
      <ng-template #ban>
        <button class="btn btn-primary" type="button" (click)="banUser.emit(user.id)">Ban User</button>
      </ng-template>
      <ng-template #unban>
        <button class="btn btn-primary" type="button" (click)="unbanUser.emit(user.id)">Unban User</button>
      </ng-template>
      <br><br>
      <button class="btn btn-primary" type="button" (click)="deleteUser.emit(user.id)">Delete User</button>
    </div>
  </div>`,
  styleUrls: ['user-profile-action.component.scss']
})
export class UserProfileActionComponent{

  @Input() user: User;
  @Output() banUser = new EventEmitter<string>();
  @Output() unbanUser = new EventEmitter<string>();
  @Output() deleteUser = new EventEmitter<string>();

}
