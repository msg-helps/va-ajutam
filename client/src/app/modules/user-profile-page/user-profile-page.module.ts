import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {UserProfilePageComponent} from './components/user-profile-page.component';
import {UserService} from './user-profile-page.service';
import {UserProfilePageRoutingModule} from './user-profile-page-routing.module';

@NgModule({
  declarations: [
    UserProfilePageComponent
  ],
  imports: [
    CommonModule,
    UserProfilePageRoutingModule,
  ],
  exports: [UserProfilePageComponent],
  providers: [UserService]
})
export class UserModule {}