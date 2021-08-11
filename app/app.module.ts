import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstStandaloneComponent } from './demo1/firstStandalone.component';
import { StandaloneWithImportComponent } from './demo2/standaloneWithImport.component';
import { StandaloneImportingStandaloneComponent } from './demo3/standaloneImportingStandalone.component.ts';

@NgModule({
  imports: [
    BrowserModule,
    // hack: this will become just FirstStandaloneComponent in final version
    FirstStandaloneComponent['module'],
    StandaloneWithImportComponent['module'],
    StandaloneImportingStandaloneComponent['module']
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
