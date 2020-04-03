import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SmartUserProfilePageComponent } from './components/smart-user-profile-page/smart-user-profile-page.component';

export const userProfileRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SmartUserProfilePageComponent
  },
];

@NgModule({
  imports: [ FormsModule, ReactiveFormsModule, RouterModule.forChild(userProfileRoutes) ],
  exports: [ RouterModule ]
})
export class UserProfilePageRoutingModule{}
