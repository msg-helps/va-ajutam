import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {InfoCardTextComponent} from './components/info-card/info-card-text/info-card-text.component';
import {InfoCardComponent} from './components/info-card/info-card.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [InfoCardComponent, InfoCardTextComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InfoCardComponent,
    InfoCardTextComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule {
}
