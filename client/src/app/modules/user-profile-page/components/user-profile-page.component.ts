import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user-profile-page.service';
import User from '../../../shared/model/user.model';
import { Observable } from 'rxjs';

@Component({
  providers: [ UserService ],
  selector: 'app-user-profile-page',
  templateUrl: 'user-profile-page.component.html',
  styleUrls: ['user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  userGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    organization: new FormControl(),
    region: new FormControl()
  })

  @Input() user: User;

  constructor( private _userService: UserService) {
  }

  ngOnInit(): void {
    this._userService.getMockUser().subscribe(
      userResponse => this.user = userResponse
    )
  }

}
