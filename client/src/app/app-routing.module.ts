import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { UserProfilePageComponent } from './modules/user-profile-page/components/user-profile-page.component';
import { SmartUserProfilePageComponent } from './modules/user-profile-page/components/smart-user-profile-page/smart-user-profile-page.component';

const routes: Routes = [
  {
    path: 'pets',
    loadChildren: './modules/pet-example/pet.module#PetModule'
  },
  {
    path: 'user',
    //component: UserProfilePageComponent,
    //component: SmartUserProfilePageComponent
    loadChildren: () => import('./modules/user-profile-page/user-profile-page.module').then(module => module.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
