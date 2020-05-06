import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InfoCardTextComponent} from './components/info-card/info-card-text/info-card-text.component';
import {InfoCardComponent} from './components/info-card/info-card.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {UserService} from './user/user.service';
import { NavbarComponent } from './components/navbar/navbar-component';
import {UserCommentComponent} from './components/user-comments/user-comment/user-comment.component';
import {UserCommentsComponent} from './components/user-comments/user-comments.component';

@NgModule({
  declarations: [
    InfoCardComponent,
    InfoCardTextComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    UserCommentsComponent,
    UserCommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    UserService
  ],
  exports: [
    CommonModule,
    InfoCardComponent,
    InfoCardTextComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    UserCommentComponent,
    UserCommentsComponent
  ]
})
export class SharedModule {
}
