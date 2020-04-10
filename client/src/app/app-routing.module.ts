import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing-page/landing-page.module').then(module => module.LandingPageModule)
  },
  {
    path: 'pets',
    loadChildren: './modules/pet-example/pet.module#PetModule'
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user-profile-page/user-profile-page.module').then(module => module.UserModule)
  },
  {
    path: 'help-requests',
    loadChildren: () => import('./modules/help-requests/help-requests.module').then(m => m.HelpRequestsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
