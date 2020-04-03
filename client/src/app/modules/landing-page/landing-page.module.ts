import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/page/landing-page.component';
import {AppStatsComponent} from './components/presentational/landing-page/landing-page.component';
import {SmartLandingPageComponent} from './components/smart/smart-landing-page/smart-landing-page.component';
import {LandingPageRoutingModule} from './landing-page-routing.module';
import {LandingPageService} from './landing-page.service';
import {AppStatsEffects} from './state/landing-page.effects';
import {appStatsReducer} from './state/landing-page.reducer';

export const landingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent
  },
];

@NgModule({
  declarations: [
    LandingPageComponent,
    AppStatsComponent,
    SmartLandingPageComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('pet', appStatsReducer),
    EffectsModule.forFeature([AppStatsEffects]),
    LandingPageRoutingModule,
  ],
  exports: [RouterModule],
  providers: [LandingPageService]
})
export class LandingPageModule { }
