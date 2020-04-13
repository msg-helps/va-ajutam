import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile-action',
  template: `
  <div *ngIf="isAdmin">
    <h2> Actions </h2>
    <div class="col-md-6 col-lg-6 well">
      <ng-container *ngIf="isAdmin && isBanned; then unban else ban"></ng-container>
      <ng-template #ban>
        <button class="btn btn-primary" type="button" (click)="banUser.emit()">Ban User</button>
      </ng-template>
      <ng-template #unban>
        <button class="btn btn-primary" type="button" (click)="unbanUser.emit()">Unban User</button>
      </ng-template>
      <br><br>
      <button class="btn btn-primary" type="button" (click)="deleteUser.emit()">Delete User</button>
    </div>
  </div>`,
  styleUrls: ['user-profile-action.component.scss']
})
export class UserProfileActionComponent{

  @Input() isAdmin: boolean;
  @Input() isBanned: boolean;
  @Output() banUser = new EventEmitter<void>();
  @Output() unbanUser = new EventEmitter<void>();
  @Output() deleteUser = new EventEmitter<void>();

}
