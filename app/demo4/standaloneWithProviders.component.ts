import { NgModule, InjectionToken, Inject } from '@angular/core';
import { Component } from '../../standaloneShim';

export const locale = new InjectionToken<string[]>('locale');

@Component({
  selector: 'standalone-with-providers-component',
  standalone: true,
  // TODO: should this be explicit?
  // imports: [CommonModule]
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

@NgModule({
  providers: [
    { provide: locale, multi: true, useValue: 'en' },
    { provide: locale, multi: true, useValue: 'sk' }
  ]
})
class NgModuleWithProvider {}
