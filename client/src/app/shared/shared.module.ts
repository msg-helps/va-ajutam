import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {InfoCardTextComponent} from './components/info-card/info-card-text/info-card-text.component';
import {InfoCardComponent} from './components/info-card/info-card.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import { UserCommentComponent } from './components/user-comments/user-comment/user-comment.component';


@NgModule({
  declarations: [InfoCardComponent, InfoCardTextComponent, UserCommentsComponent, LoadingSpinnerComponent, UserCommentComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InfoCardComponent,
    InfoCardTextComponent,
    LoadingSpinnerComponent,
    UserCommentComponent,
    UserCommentsComponent
  ]
})
export class SharedModule {
}
