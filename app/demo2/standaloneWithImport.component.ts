import { FormsModule } from '@angular/forms';
import { Component } from '../../standaloneShim';

@Component({
  selector: 'standalone-with-import-component',
  standalone: true,
  imports: [FormsModule],
  template: `
    Forms work: <input [(ngModel)]="name" /> (name = {{ name }})
  `
})
export class StandaloneWithImportComponent {
  name = 'Daft Punk';
}
