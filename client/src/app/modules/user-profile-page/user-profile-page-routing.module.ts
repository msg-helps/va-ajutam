import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserPageComponent } from './components/page/user-page.component';

export const userProfileRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserPageComponent
  },
];

@NgModule({
  imports: [ FormsModule, ReactiveFormsModule, RouterModule.forChild(userProfileRoutes) ],
  exports: [ RouterModule ]
})
export class UserProfilePageRoutingModule{}
