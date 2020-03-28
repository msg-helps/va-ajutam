import {NgModule} from '@angular/core';
import {SmartRequestOfferListComponent} from './components/smart/smart-request-offer-list/smart-request-offer-list.component';
import {RequestOfferListItemComponent} from './components/presentational/request-offer-list-item/request-offer-list-item.component';
import {RequestOfferListPageComponent} from './components/pages/request-offer-list-page/request-offer-list-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RequestOfferListHeaderComponent} from './components/presentational/request-offer-list-header/request-offer-list-header.component';
import {RequestOfferListContentComponent} from './components/presentational/request-offer-list-content/request-offer-list-content.component';

@NgModule({
  imports: [
    NgbModule
  ],
  declarations: [
    SmartRequestOfferListComponent,
    RequestOfferListItemComponent,
    RequestOfferListPageComponent,
    RequestOfferListHeaderComponent,
    RequestOfferListContentComponent
  ],
  exports: [
    RequestOfferListPageComponent
  ],
  providers: []
})
export class RequestOfferListModule {

}
