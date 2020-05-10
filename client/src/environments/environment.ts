// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleMapsKey: 'AIzaSyCn-q25PxkBXTG49vn-iqubVjF7jrbr5oM',
  auth: {
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
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
