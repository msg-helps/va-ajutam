import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepageComponent } from './create-page/createpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/offer',
    pathMatch: 'full'
  },
  {
    path: 'offer',
    component: CreatepageComponent
  },
  {
    path: 'request',
    component: CreatepageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
