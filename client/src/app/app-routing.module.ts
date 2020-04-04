import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
      path: 'pets',
      loadChildren: './modules/pet-example/pet.module#PetModule'
    },
    {
      path: 'help-requests',
      loadChildren: () => import('./modules/help-requests/help-requests.module').then(m => m.HelpRequestsModule)
    },
    {
      path: 'request-offer',
      loadChildren: () => import('./modules/request-offer-list/request-offer-list.module').then(m => m.RequestOfferListModule)
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
