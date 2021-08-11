import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstStandaloneComponent } from './firstStandalone.component';

@NgModule({
  imports: [
    BrowserModule
    // hack: this will become just FirstStandaloneComponent in final version
    // FirstStandaloneComponent.module
  ],
  declarations: [AppComponent, FirstStandaloneComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
