import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatepageComponent } from './components/page/createpage.component';

const routes: Routes = [
  {
    path: 'offer',
    component: CreatepageComponent
  },
  {
    path: 'request',
    component: CreatepageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepageRoutingModule { }
