// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  personal: {
    name: "Ioannis Torakis",
    title: "Senior .NET Software Engineer",
    birth: "1995-12-08",
    email: "johntor1995@gmail.com",
    phone: "+30 6982445915",
    location: "Athens, Greece"
  },
  firebaseConfig: {
    apiKey: "AIzaSyBCkJUm-gz7PpHx29TCiL8pcVDBk8mSFGI",
    authDomain: "torakis-resume.firebaseapp.com",
    projectId: "torakis-resume",
    storageBucket: "torakis-resume.appspot.com",
    messagingSenderId: "694979374652",
    appId: "1:694979374652:web:436188337ed40af453dd39",
    measurementId: "G-J3ZX630Z8L"
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
