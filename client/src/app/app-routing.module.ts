import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'pets',
    loadChildren: () => import('./modules/pet-example/pet.module').then(module => module.PetModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user-profile-page/user-profile-page.module').then(module => module.UserModule)
  },
  {
    path: 'help-requests',
    loadChildren: () => import('./modules/help-requests/help-requests.module').then(m => m.HelpRequestsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
