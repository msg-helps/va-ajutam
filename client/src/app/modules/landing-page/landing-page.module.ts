import { NgModule } from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../../shared/shared.module';
import {LandingPageComponent} from './components/page/landing-page.component';
import {AppStatsComponent} from './components/presentational/landing-page/landing-page.component';
import {SmartLandingPageComponent} from './components/smart/smart-landing-page/smart-landing-page.component';
import {LandingPageRoutingModule} from './landing-page-routing.module';
import {LandingPageService} from './landing-page.service';
import {AppStatsEffects} from './state/landing-page.effects';
import {appStatsReducer} from './state/landing-page.reducer';

@NgModule({
  declarations: [
    LandingPageComponent,
    SmartLandingPageComponent,
    AppStatsComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('appStats', appStatsReducer),
    EffectsModule.forFeature([AppStatsEffects]),
    LandingPageRoutingModule,
  ],
  exports: [LandingPageComponent],
  providers: [LandingPageService]
})
export class LandingPageModule { }
