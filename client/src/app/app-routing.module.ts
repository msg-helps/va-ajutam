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
  {
    path: 'pets',
    loadChildren: './modules/pet-example/pet.module#PetModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
