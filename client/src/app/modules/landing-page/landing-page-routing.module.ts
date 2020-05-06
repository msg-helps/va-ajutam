import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/page/landing-page.component';

export const landingPageRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(landingPageRoutes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule {}
