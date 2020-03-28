import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserProfilePageComponent } from './modules/user-profile-page/components/user-profile-page.component';

const routes: Routes = [
  {
    path: 'pets',
    loadChildren: './modules/pet-example/pet.module#PetModule'
  },
  {
    path: 'user',
    component: UserProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
