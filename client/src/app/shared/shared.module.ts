import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {InfoCardTextComponent} from './components/info-card/info-card-text/info-card-text.component';
import {InfoCardComponent} from './components/info-card/info-card.component';
import { UserCommentComponent } from './components/user-comment/user-comment.component';


@NgModule({
  declarations: [InfoCardComponent, InfoCardTextComponent, UserCommentComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InfoCardComponent,
    InfoCardTextComponent
  ]
})
export class SharedModule { }
