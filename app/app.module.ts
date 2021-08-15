import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstStandaloneComponent } from './demo1/firstStandalone.component';
import { StandaloneWithImportComponent } from './demo2/standaloneWithImport.component';
import { StandaloneImportingStandaloneComponent } from './demo3/standaloneImportingStandalone.component';
import {
  StandaloneWithProvidersComponent,
  locale
} from './demo4/standaloneWithProviders.component';
import {
  StandaloneWithExportedProvidersComponent,
  localeB
} from './demo4b/standaloneWithExportedProviders.component';
import {
  StandaloneWithProvidersInExportsComponent,
  localeC
} from './demo4c/standaloneWithProvidersInExports.component';
import { StandaloneRedBorderDirective } from './demo5/standaloneRedBorder.directive';
import { StandaloneStarPipe } from './demo6/standaloneStar.pipe';
import { DynamicallyLoadingComponent } from './demo7/dynamicallyLoading.component';
import { DynamicallyLoadedComponent } from './demo7/dynamicallyLoaded.component';
import { ExportingComponent } from './demo8/exporting.component';
import { StandaloneWithRoutesComponent } from './demo_10/standaloneWithRoutes.component';

@NgModule({
  imports: [
    BrowserModule,
    // hack: this will become just FirstStandaloneComponent in final version
    FirstStandaloneComponent['module'],
    StandaloneWithImportComponent['module'],
    StandaloneImportingStandaloneComponent['module'],
    StandaloneWithProvidersComponent['module'],
    StandaloneWithExportedProvidersComponent['module'],
    StandaloneWithProvidersInExportsComponent['module'],
    StandaloneRedBorderDirective['module'],
    StandaloneStarPipe['module'],
    DynamicallyLoadingComponent['module'],
    // TODO: this is needed for demo #7 right now but should NOT be
    DynamicallyLoadedComponent['module'],
    ExportingComponent['module'],
    StandaloneWithRoutesComponent['module']
  ],
  // additional provider for demo #4, #4b, and #4c
  providers: [
    { provide: locale, multi: true, useValue: 'fr' },
    { provide: localeB, multi: true, useValue: 'fr' },
    { provide: localeC, multi: true, useValue: 'fr' }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
