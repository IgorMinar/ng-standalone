import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstStandaloneComponent } from './demo1/firstStandalone.component';
import { StandaloneWithImportComponent } from './demo2/standaloneWithImport.component';
import { StandaloneImportingStandaloneComponent } from './demo3/standaloneImportingStandalone.component.ts';
import {
  StandaloneWithProvidersComponent,
  locale
} from './demo4/standaloneWithProviders.component';
import { StandaloneRedBorderDirective } from './demo5/standaloneRedBorder.directive';
import { StandaloneStarPipe } from './demo6/standaloneStar.pipe';

@NgModule({
  imports: [
    BrowserModule,
    // hack: this will become just FirstStandaloneComponent in final version
    FirstStandaloneComponent['module'],
    StandaloneWithImportComponent['module'],
    StandaloneImportingStandaloneComponent['module'],
    StandaloneWithProvidersComponent['module'],
    StandaloneRedBorderDirective['module'],
    StandaloneStarPipe['module']
  ],
  // additional provider for demo #4
  providers: [{ provide: locale, multi: true, useValue: 'fr' }],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
