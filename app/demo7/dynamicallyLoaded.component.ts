import { Component } from '../../standaloneShim';

@Component({
  selector: 'dynamically-loaded-standalone-component',
  standalone: true,
  template: `
    I'm dynamically loaded!
    <button (click)="confirm()">click to confirm</button>
    {{ counter }}
  `
})
export class DynamicallyLoadedComponent {
  counter = 0;

  confirm() {
    this.counter++;
    console.log('confirmed!');
  }
}
