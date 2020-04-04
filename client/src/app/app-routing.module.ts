import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'pets',
    loadChildren: './modules/pet-example/pet.module#PetModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './modules/landing-page/landing-page.module#LandingPageModule'
  },
  { path: 'help-requests', loadChildren: () => import('./modules/help-requests/help-requests.module').then(m => m.HelpRequestsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
