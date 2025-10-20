/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// The app.config.ts file is the central place for configuring your entire Angular application. Think of it as the main settings file for the app.

// This 'importProvidersFrom' imports a function that allows you to use modules 
// (like FormsModule) in a modern standalone application.
import {ApplicationConfig, importProvidersFrom} from '@angular/core';

// Because you've already added FormsModule to the providers in app.config.ts, 
import { FormsModule } from '@angular/forms'; // This line imports the FormsModule.

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule) // This line within the providers array makes all 
    // the features of FormsModule, including the [(ngModel)] directive, available across 
    // your entire application.
  ],
};
