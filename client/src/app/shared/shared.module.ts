import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {InfoCardTextComponent} from './components/info-card/info-card-text/info-card-text.component';
import {InfoCardComponent} from './components/info-card/info-card.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './components/navbar/navbar-component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [InfoCardComponent, InfoCardTextComponent, LoadingSpinnerComponent, NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    InfoCardComponent,
    InfoCardTextComponent,
    LoadingSpinnerComponent,
    NavbarComponent
  ],
  providers: []
})
export class SharedModule {
}
