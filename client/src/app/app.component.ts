import {Component} from '@angular/core';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: 'eu-central-1:7fa1f5a7-1009-4a7d-aea8-5b75337d2044',
    userPoolId: 'eu-central-1_zdjigHIdf',
    userPoolWebClientId: '7jc34g2u8mmk2ffdbs798crk5u',
    region: 'eu-central-1',
    oauth: {
      domain: 'va-ajutam-din-msg.auth.eu-central-1.amazoncognito.com',
      scope: ['openid'],
      redirectSignIn: 'http://localhost:4200/login',
      redirectSignOut: 'http://localhost:4200/logout',
      responseType: 'code'
    }
  }
});

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
