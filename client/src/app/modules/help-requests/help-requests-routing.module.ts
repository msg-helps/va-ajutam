import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpRequestDetailPageComponent} from './components/page/help-request-detail-page/help-request-detail-page.component';
import { HelpRequestListPageComponent } from './components/page/help-request-list/help-request-list-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HelpRequestListPageComponent },
  { path: ':id', component: HelpRequestDetailPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRequestsRoutingModule { }
