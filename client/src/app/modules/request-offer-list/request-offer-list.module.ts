import {NgModule} from '@angular/core';
import {SmartRequestOfferListComponent} from './components/smart/smart-request-offer-list/smart-request-offer-list.component';
import {OfferListItemComponent} from './components/presentational/offer-list-item/offer-list-item.component';
import {RequestOfferListPageComponent} from './components/pages/request-offer-list-page/request-offer-list-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RequestOfferListHeaderComponent} from './components/presentational/request-offer-list-header/request-offer-list-header.component';
import {RequestOfferListContentComponent} from './components/presentational/request-offer-list-content/request-offer-list-content.component';
import {RequestOfferListRoutingModule} from './request-offer-list-routing.module';
import {RequestOfferListService} from './request-offer-list.service';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {requestOfferListReducer} from './state/request-offer-list.reducer';
import {RequestOfferListEffects} from './state/request-offer-list.effects';
import {SharedModule} from '../../shared/shared.module';
import {RequestListItemComponent} from './components/presentational/request-list-item/request-list-item.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RequestOfferListRoutingModule,
    StoreModule.forFeature('requestOfferList', requestOfferListReducer),
    EffectsModule.forFeature([RequestOfferListEffects]),
    SharedModule
  ],
  declarations: [
    SmartRequestOfferListComponent,
    OfferListItemComponent,
    RequestOfferListPageComponent,
    RequestOfferListHeaderComponent,
    RequestListItemComponent,
    RequestOfferListContentComponent
  ],
  exports: [
    RequestOfferListPageComponent
  ],
  providers: [RequestOfferListService]
})
export class RequestOfferListModule {

}
