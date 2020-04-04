import { CommonModule} from "@angular/common";
import { NgModule} from '@angular/core';
import { UserProfilePageComponent} from './components/presentational/user-profile-page.component';
import { UserService} from './user-profile-page.service';
import { UserProfilePageRoutingModule} from './user-profile-page-routing.module';
import { SmartUserProfilePageComponent } from './components/smart-user-profile-page/smart-user-profile-page.component';
import { UserEffects} from './state/user.effect';
import { userReducer} from './state/user.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './components/page/user-page.component';

@NgModule({
  declarations: [
    UserPageComponent,
    SmartUserProfilePageComponent,
    UserProfilePageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects]),
    UserProfilePageRoutingModule,
  ],
  exports: [UserPageComponent, SmartUserProfilePageComponent, UserProfilePageComponent],
  providers: [UserService]
})
export class UserModule {}