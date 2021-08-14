import { InjectionToken, Inject } from '@angular/core';
import { Component } from '../../standaloneShim';

export const localeB = new InjectionToken<string[]>('locale');

@Component({
  selector: 'standalone-with-exported-providers-component',
  standalone: true,
  // TODO: should this be explicit?
  // imports: [CommonModule],
  exportedProviders: [
    { provide: localeB, multi: true, useValue: 'en' },
    { provide: localeB, multi: true, useValue: 'sk' }
  ],
  template: `
    Supported locales:
    <ul>
      <li *ngFor="let locale of locales">{{ locale }}</li>
    </ul>
  `
})
export class StandaloneWithExportedProvidersComponent {
  constructor(@Inject(localeB) protected locales) {}
}
