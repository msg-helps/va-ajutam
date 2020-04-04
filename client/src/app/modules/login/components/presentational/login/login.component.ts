import {Component, EventEmitter, Output} from '@angular/core';
import {LoginProvider} from '../../../login.model';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <button type="button" class="btn btn-primary" (click)="login.emit(LoginProvider.FACEBOOK)">
        <i class="fab fa-facebook-square"></i>&nbsp;&nbsp;Facebook
      </button>
      <button type="button" class="btn btn-danger" (click)="login.emit(LoginProvider.GOOGLE)">
        <i class="fab fa-google"></i>&nbsp; Google
      </button>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly LoginProvider = LoginProvider;
  @Output() login = new EventEmitter<LoginProvider>();
}
