import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {InfoCardTextComponent} from './components/info-card/info-card-text/info-card-text.component';
import {InfoCardComponent} from './components/info-card/info-card.component';

@NgModule({
  declarations: [InfoCardComponent, InfoCardTextComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    InfoCardComponent,
    InfoCardTextComponent
  ]
})
export class SharedModule { }
