import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelpRequestCommentsPageComponent} from "./components/page/help-request-comments-page/help-request-comments-page.component";
import {HelpRequestDetailPageComponent} from './components/page/help-request-detail-page/help-request-detail-page.component';
import {RequestOfferListPageComponent} from './components/page/request-offer-list-page/request-offer-list-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: RequestOfferListPageComponent},
  {path: ':id', component: HelpRequestDetailPageComponent},
  {path: ':id/comments', component: HelpRequestCommentsPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRequestsRoutingModule {
}
