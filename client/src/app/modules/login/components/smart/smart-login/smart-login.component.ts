import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectLoginState, StateWithLogin} from '../../../state/login.reducer';
import {Login} from '../../../state/login.actions';
import {LoginProvider} from '../../../login.model';
import {LoginService} from '../../../login.service';

@Component({
  selector: 'app-smart-login',
  template: `
    <app-login (login)="onLogin($event)"></app-login>
  `
})
export class SmartLoginComponent implements OnInit {

  hasError$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<StateWithLogin>, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.hasError$ = this.store.select(selectLoginState).pipe(select(petState => petState.error));
    this.isLoading$ = this.store.select(selectLoginState).pipe(select(petState => petState.loading));
    this.loginService.getUser().then(console.log);
  }

  onLogin(provider: LoginProvider) {
    this.store.dispatch(new Login(provider));
  }

}
