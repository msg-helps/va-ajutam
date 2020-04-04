import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelpRequestDetailPageComponent} from './components/page/help-request-detail-page/help-request-detail-page.component';
import {RequestOfferListPageComponent} from './components/page/request-offer-list-page/request-offer-list-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: RequestOfferListPageComponent},
  {path: ':id', component: HelpRequestDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRequestsRoutingModule {
}
