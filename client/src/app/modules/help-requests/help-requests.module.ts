import {AgmCoreModule} from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {environment} from "../../../environments/environment";
import {SharedModule} from '../../shared/shared.module';
import {SmartHelpRequestDetailComponent} from './components/smart/smart-help-request-detail/smart-help-request-detail.component';

import { HelpRequestsRoutingModule } from './help-requests-routing.module';
import { HelpRequestListPageComponent } from './components/page/help-request-list/help-request-list-page.component';
import { HelpRequestDetailPageComponent } from './components/page/help-request-detail-page/help-request-detail-page.component';
import { HelpRequestDetailComponent } from './components/presentational/help-request-detail/help-request-detail.component';
import {HelpRequestEffects} from './state/help-request.effects';
import {helpRequestReducer} from './state/help-request.reducer';


@NgModule({
  declarations: [HelpRequestListPageComponent, HelpRequestDetailPageComponent, SmartHelpRequestDetailComponent, HelpRequestDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    HelpRequestsRoutingModule,
    StoreModule.forFeature('helpRequest', helpRequestReducer),
    EffectsModule.forFeature([HelpRequestEffects]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ]
})
export class HelpRequestsModule { }
