import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user-profile-page.service';
import UserProfile from '../user-profile.model';


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  @Input() user: UserProfile;
  formGroup: FormGroup;

  constructor( private _formBuilder: FormBuilder,
               private _userService: UserService) {
    this.formGroup = this._formBuilder.group({
      name: [],
      email: [],
      phone: [],
      address: []
    })
  }

  ngOnInit(): void {
    this.user = this._userService.getUser();
  }

}
