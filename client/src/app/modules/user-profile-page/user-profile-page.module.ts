import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UserProfilePageComponent} from './components/presentational/user-profile-page.component';
import {UserProfilePageRoutingModule} from './user-profile-page-routing.module';
import {SmartUserProfilePageComponent} from './components/smart-user-profile-page/smart-user-profile-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserPageComponent} from './components/page/user-page.component';

@NgModule({
  declarations: [
    UserPageComponent,
    SmartUserProfilePageComponent,
    UserProfilePageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UserProfilePageRoutingModule,
  ],
  exports: [UserPageComponent, SmartUserProfilePageComponent, UserProfilePageComponent],
  providers: []
})
export class UserModule {}
