import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {SharedModule} from '../../shared/shared.module';
import {HelpRequestDetailPageComponent} from './components/page/help-request-detail-page/help-request-detail-page.component';
import {HelpRequestDetailComponent} from './components/presentational/help-request-detail/help-request-detail.component';
import {SmartHelpRequestDetailComponent} from './components/smart/smart-help-request-detail/smart-help-request-detail.component';
import {HelpRequestsRoutingModule} from './help-requests-routing.module';
import {HelpRequestEffects} from './state/help-request.effects';
import {helpRequestReducer} from './state/help-request.reducer';
import {SmartRequestOfferListComponent} from './components/smart/smart-request-offer-list/smart-request-offer-list.component';
import {OfferListItemComponent} from './components/presentational/offer-list-item/offer-list-item.component';
import {RequestOfferListPageComponent} from './components/page/request-offer-list-page/request-offer-list-page.component';
import {RequestOfferListHeaderComponent} from './components/presentational/request-offer-list-header/request-offer-list-header.component';
import {RequestListItemComponent} from './components/presentational/request-list-item/request-list-item.component';
// tslint:disable-next-line:max-line-length
import {RequestOfferListContentComponent} from './components/presentational/request-offer-list-content/request-offer-list-content.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {SmartHelpRequestDetailActionBarComponent} from './components/smart/smart-help-request-detail-action-bar/smart-help-request-detail-action-bar.component';


@NgModule({
  declarations: [
    HelpRequestDetailPageComponent,
    SmartHelpRequestDetailComponent,
    HelpRequestDetailComponent,
    SmartRequestOfferListComponent,
    OfferListItemComponent,
    RequestOfferListPageComponent,
    RequestOfferListHeaderComponent,
    RequestListItemComponent,
    RequestOfferListContentComponent,
    SmartHelpRequestDetailActionBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HelpRequestsRoutingModule,
    StoreModule.forFeature('helpRequest', helpRequestReducer),
    EffectsModule.forFeature([HelpRequestEffects]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    NgbDropdownModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpRequestsModule {
}
