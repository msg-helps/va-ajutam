import User from './user.model';

export enum LoginProvider {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook'
}

export interface Credentials {
  oauth: {
    accessToken: string;
    idToken: string;
  };
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
  };
  user: User;
}
