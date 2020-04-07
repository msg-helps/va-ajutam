import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepageComponent } from './components/page/createpage.component';
import { SmartCreatePageDetailsComponent } from './components/smart/smart-createpage-details.component';
import { CreatepageDetailsComponent } from './components/presentational/createpage-details.component';
import { CreatepageRoutingModule } from './createpage-routing.module';
import { StoreModule } from '@ngrx/store';
import { helpOfferRequestReducer } from './state/createpage.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HelpOfferRequestEffects } from './state/createpage.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreatepageComponent, SmartCreatePageDetailsComponent, CreatepageDetailsComponent],
  imports: [
    CommonModule,
    CreatepageRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('helpOfferRequestState', helpOfferRequestReducer),
    EffectsModule.forFeature([HelpOfferRequestEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreatepageModule {}
