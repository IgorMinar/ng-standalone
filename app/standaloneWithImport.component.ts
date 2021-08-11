import { FormsModule } from '@angular/forms';
import { Component } from '../standaloneShim';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'standalone-with-import-component',
  standalone: true,
  imports: [FormsModule],
  template: `
    I'm first!
    <button (click)="confirm()">click to confirm</button>
  `
})
export class StandaloneWithImport {
  name = 'Daft Punk';
}
