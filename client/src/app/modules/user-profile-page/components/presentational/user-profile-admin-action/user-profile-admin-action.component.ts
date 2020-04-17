import { Component, Input, Output, EventEmitter } from '@angular/core';
import User from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-profile-admin-action',
  template: `
  <div *ngIf="user.isAdmin">
    <br>
    <h2> Actions </h2>
    <div class="col-md-6 col-lg-6 well">
      <ng-container *ngIf="user.isAdmin && user.isBanned; then unban else ban"></ng-container>
      <ng-template #ban>
        <button class="btn btn-primary" type="button" (click)="banUser.emit(user.id)">Ban User</button>
      </ng-template>
      <ng-template #unban>
        <button class="btn btn-primary" type="button" (click)="unbanUser.emit(user.id)">Unban User</button>
      </ng-template>
    </div>
  </div>`,
  styleUrls: ['user-profile-admin-action.component.scss']
})
export class UserProfileAdminActionComponent{

  @Input() user: User;
  @Output() banUser = new EventEmitter<string>();
  @Output() unbanUser = new EventEmitter<string>();

}
