// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDxfqovpGQCsgKRYQG0huUnJyVzYFSfmzE",
    authDomain: "todoapp-bbb9e.firebaseapp.com",
    databaseURL: "https://todoapp-bbb9e.firebaseio.com",
    projectId: "todoapp-bbb9e",
    storageBucket: "todoapp-bbb9e.appspot.com",
    messagingSenderId: "69990818404"
  }
};
