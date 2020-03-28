import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user-profile-page.service';
import UserProfile from '../user-profile.model';


@Component({
  providers: [UserService],
  selector: 'app-user-profile-page',
  templateUrl: 'user-profile-page.component.html',
  styleUrls: ['user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  userGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl('')
  })

  @Input() user: UserProfile;

  constructor( private _userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this._userService.getUser();
  }

}
