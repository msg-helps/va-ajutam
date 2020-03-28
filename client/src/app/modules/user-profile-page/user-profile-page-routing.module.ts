import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfilePageComponent} from './components/user-profile-page.component';

export const userProfileRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserProfilePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(userProfileRoutes)],
  exports: [RouterModule]
})
export class UserProfilePageRoutingModule {}
