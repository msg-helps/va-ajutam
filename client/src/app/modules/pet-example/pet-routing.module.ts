import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetPageComponent} from './components/page/pet-page/pet-page.component';

export const petRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PetPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(petRoutes)],
  exports: [RouterModule]
})
export class PetRoutingModule {}
