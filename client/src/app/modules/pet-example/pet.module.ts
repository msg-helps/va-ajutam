import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from "../../shared/shared.module";
import {PetPageComponent} from './components/page/pet-page/pet-page.component';
import {PetDetailsComponent} from './components/presentational/pet-details/pet-details.component';
import {SmartPetDetailsComponent} from './components/smart/smart-pet-details-list/smart-pet-details.component';
import {PetRoutingModule} from './pet-routing.module';
import {PetService} from './pet.service';
import {PetEffects} from './state/pet.effects';
import {petReducer} from './state/pet.reducer';

@NgModule({
  declarations: [
    PetPageComponent,
    SmartPetDetailsComponent,
    PetDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('pet', petReducer),
    EffectsModule.forFeature([PetEffects]),
    PetRoutingModule,
  ],
  exports: [PetPageComponent],
  providers: [PetService]
})
export class PetModule {}
