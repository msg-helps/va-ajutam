import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import User from '../../../shared/model/user.model';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: 'user-profile-page.component.html',
  styleUrls: ['user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  @Input() user: User;
  @Output() loadUser = new EventEmitter<void>();

  userGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    organization: new FormControl(),
    region: new FormControl()
  })

  ngOnInit(): void {

    this.userGroup.get('firstName').setValue(this.user.firstName);
    this.userGroup.get('lastName').setValue(this.user.lastName);
    this.userGroup.get('phone').setValue(this.user.phone);
    this.userGroup.get('organization').setValue(this.user.organization);
    this.userGroup.get('region').setValue(this.user.region);

  }

}
