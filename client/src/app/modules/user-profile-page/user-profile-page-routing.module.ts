import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilePageComponent } from './components/user-profile-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const userProfileRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserProfilePageComponent
  },
];

@NgModule({
  imports: [ FormsModule, ReactiveFormsModule, RouterModule.forChild(userProfileRoutes) ],
  exports: [ RouterModule ]
})
export class UserProfilePageRoutingModule{}
