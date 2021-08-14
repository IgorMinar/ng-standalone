import { InjectionToken, Inject } from '@angular/core';
import { Component } from '../../standaloneShim';

export const localeC = new InjectionToken<string[]>('locale');

@Component({
  selector: 'standalone-with-providers-in-exports-component',
  standalone: true,
  // TODO: should this be explicit?
  // imports: [CommonModule],
  exports: [
    [
      { provide: localeC, multi: true, useValue: 'en' },
      { provide: localeC, multi: true, useValue: 'sk' }
    ]
  ],
  template: `
    Supported locales:
    <ul>
      <li *ngFor="let locale of locales">{{ locale }}</li>
    </ul>
  `
})
export class StandaloneWithProvidersInExportsComponent {
  constructor(@Inject(localeC) protected locales) {}
}
