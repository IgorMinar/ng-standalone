import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstStandaloneComponent } from './firstStandalone.component';
import { StandaloneWithImport } from './standaloneWithImport.component';

@NgModule({
  imports: [
    BrowserModule,
    // hack: this will become just FirstStandaloneComponent in final version
    FirstStandaloneComponent['module'],
    StandaloneWithImport['module']
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
