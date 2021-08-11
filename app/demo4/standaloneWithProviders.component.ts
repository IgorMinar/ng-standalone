import { NgModule, InjectionToken, Inject } from '@angular/core';
import { Component } from '../../standaloneShim';

export const locale = new InjectionToken<string[]>('locale');

@NgModule({
  providers: [
    { provide: locale, multi: true, useValue: 'en' },
    { provide: locale, multi: true, useValue: 'sk' }
  ]
})
class MyNgModuleWithProvider {}

@Component({
  selector: 'standalone-with-providers-component',
  standalone: true,
  imports: [
    MyNgModuleWithProvider
    // TODO: should this be explicit?
    // CommonModule
  ],
  template: `
    Supported locales:
    <ul>
      <li *ngFor="let locale of locales">{{ locale }}</li>
    </ul>
  `
})
export class StandaloneWithProvidersComponent {
  constructor(@Inject(locale) protected locales) {}
}
