import { Component } from '../../standaloneShim';

@Component({
  selector: 'dynamically-loaded-standalone-component',
  standalone: true,
  template: `
    I'm dynamically loaded!
    <button (click)="confirm()">click to confirm</button>
  `
})
export class DynamicallyLoadedStandaloneComponent {
  confirm() {
    console.log('confirmed!');
  }
}
