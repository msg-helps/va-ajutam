import {Injectable} from '@angular/core';
import Amplify, {Auth} from 'aws-amplify';
import {LoginProvider, User} from './login.model';

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


@Injectable()
export class LoginService {

  async doLogin(provider: LoginProvider): Promise<void> {
    await Auth.federatedSignIn({provider: provider as any});
  }

  async getAccessToken(): Promise<string> {
    try {
      return (await Auth.currentSession()).getAccessToken().getJwtToken();
    } catch (e) {
      return null;
    }
  }

  async getIdToken(): Promise<string> {
    try {
      return (await Auth.currentSession()).getIdToken().getJwtToken();
    } catch (e) {
      return null;
    }
  }

  async getUser(): Promise<User> {
    const creds = await Auth.currentAuthenticatedUser();
    console.log(creds);
    return creds ? null : {username: creds.getUsername()};
  }
}
