import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pets',
    loadChildren: './modules/pet-example/pet.module#PetModule'
  },
  { path: 'help', loadChildren: () => import('./modules/create_page/createpage.module').then(m => m.CreatepageModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
