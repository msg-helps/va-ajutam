import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestOfferListPageComponent} from './components/pages/request-offer-list-page/request-offer-list-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RequestOfferListPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestOfferListRoutingModule {}
