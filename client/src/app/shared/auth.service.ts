import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Auth, Hub} from 'aws-amplify';
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, filter, map, tap} from 'rxjs/operators';
import {isEqual} from 'lodash';
import * as AWS from 'aws-sdk';
import {Credentials, LoginProvider} from './model/login.model';
import {LoginSuccess} from '../modules/login/state/login.actions';

interface AuthServiceState {
  aws: typeof AWS;
  credentials: Credentials;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private auth$: BehaviorSubject<Credentials> = new BehaviorSubject(null);
  private state$: Observable<AuthServiceState>;

  constructor(private store: Store) {
    this.checkForCredentials().catch(console.error);
    Hub.listen('auth', capsule => {
      if (capsule.payload.event === 'signIn') {
        this.checkForCredentials().catch(console.error);
      }
    });
    this.state$ = this.auth$.asObservable().pipe(
      filter(credentials => !!(credentials && credentials.user)),
      distinctUntilChanged(isEqual),
      tap(credentials => this.store.dispatch(new LoginSuccess(credentials.user))),
      map(credentials => ({aws: AWS, credentials}))
    );
  }

  async doLogin(provider: LoginProvider): Promise<void> {
    await Auth.federatedSignIn({provider: provider as any});
  }

  getState(): Observable<AuthServiceState> {
    return this.state$;
  }

  getCredentials(): Observable<Credentials> {
    return this.auth$.asObservable().pipe(filter(credentials => !!(credentials && credentials.user)));
  }

  private async checkForCredentials(): Promise<void> {
    try {
      const aws = await Auth.currentCredentials();
      const session = await Auth.currentSession();
      const info = await Auth.currentUserInfo();
      if (aws.authenticated) {
        AWS.config.region = 'eu-central-1';
        AWS.config.credentials = aws;
      }
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
