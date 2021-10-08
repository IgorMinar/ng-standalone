import { NgModule, InjectionToken, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '../../standaloneShim';

export const locale = new InjectionToken<string[]>('locale');

@NgModule({
  providers: [
    { provide: locale, multi: true, useValue: 'en' },
    { provide: locale, multi: true, useValue: 'sk' },
  ],
})
class MyNgModuleWithProvider {}

@Component({
  selector: 'standalone-with-providers-component',
  standalone: true,
  imports: [CommonModule, MyNgModuleWithProvider],
  template: `
    Supported locales:
    <ul>
      <li *ngFor="let locale of locales">{{ locale }}</li>
    </ul>
  `,
})
export class StandaloneWithProvidersComponent {
  constructor(@Inject(locale) protected locales) {}
}
