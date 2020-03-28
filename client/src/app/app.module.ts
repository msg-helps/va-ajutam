import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PetModule} from './modules/pet-example/pet.module';
import {reducers} from './shared/state/state';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserProfilePageComponent } from './modules/user-profile-page/components/user-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfilePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PetModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
