import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Auth, Hub} from 'aws-amplify';
import {BehaviorSubject} from 'rxjs';
import {Credentials, LoginProvider} from './model/login.model';
import {LoginSuccess} from '../modules/login/state/login.actions';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {isEqual} from 'lodash';

@Injectable({providedIn: 'root'})
export class AuthService {
  private auth$: BehaviorSubject<Credentials> = new BehaviorSubject(null);

  constructor(private store: Store) {
    this.checkForCredentials().catch(console.error);
    Hub.listen('auth', capsule => {
      if (capsule.payload.event === 'signIn') {
        this.checkForCredentials().catch(console.error);
      }
    });
    this.auth$.asObservable().pipe(
      filter(credentials => !!(credentials && credentials.user)),
      map(credentials => credentials.user),
      distinctUntilChanged(isEqual),
    ).subscribe(user => this.store.dispatch(new LoginSuccess(user)));
  }

  async doLogin(provider: LoginProvider): Promise<void> {
    await Auth.federatedSignIn({provider: provider as any});
  }

  private async checkForCredentials(): Promise<void> {
    try {
      const aws = await Auth.currentCredentials();
      const session = await Auth.currentSession();
      const info = await Auth.currentUserInfo();
      this.auth$.next({
        aws: aws.authenticated ? aws : null,
        oauth: {
          accessToken: session.getAccessToken().getJwtToken(),
          idToken: session.getIdToken().getJwtToken(),
        },
        user: {
          id: info.id,
          username: info.username,
          email: info.attributes.email,
          firstName: info.attributes.given_name,
          lastName: info.attributes.family_name,
          isAdmin: false,
          organization: '',
          phone: '',
          region: ''
        }
      });
    } catch (e) {
      // no-op; error is thrown if not logged in yet
    }
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
}
