import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './components/page/login-page/login-page.component';

export const petRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(petRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
