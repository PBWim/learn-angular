/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// When your application starts, the first file that runs is src/main.ts.

// This line tells Angular to "start" or "bootstrap" your application.
import {bootstrapApplication} from '@angular/platform-browser';

// It says that the main component is App (from 'app.ts') and its configuration is appConfig.
// The appConfig object is imported directly from your 'app.config.ts' file.
        // The providers array inside it is where you make features, services, and other 
        // functionalities available to your entire application.
import {appConfig} from './app/app.config';
import {App} from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
