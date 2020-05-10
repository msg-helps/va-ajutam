import {Component} from '@angular/core';
import Amplify from 'aws-amplify';
import {environment} from '../environments/environment';

Amplify.configure({
  Auth: environment.auth
});

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
