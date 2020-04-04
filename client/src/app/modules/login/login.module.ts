import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {loginReducer} from './state/login.reducer';
import {LoginEffects} from './state/login.effects';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './components/presentational/login/login.component';
import {SmartLoginComponent} from './components/smart/smart-login/smart-login.component';
import {LoginPageComponent} from './components/page/login-page/login-page.component';
import {LoginService} from './login.service';


@NgModule({
  declarations: [
    LoginPageComponent,
    SmartLoginComponent,
    LoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffects]),
    LoginRoutingModule,
  ],
  exports: [LoginPageComponent],
  providers: [LoginService]
})
export class LoginModule {}
