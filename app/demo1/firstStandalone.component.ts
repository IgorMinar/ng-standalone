import { Component } from '../../standaloneShim';

@Component({
  selector: 'first-standalone-component',
  standalone: true,
  template: `
    I'm first!
    <button (click)="confirm()">click to confirm</button>
    {{ counter }}
  `
})
export class FirstStandaloneComponent {
  counter = 0;

  confirm() {
    this.counter++;
    console.log('confirmed!');
  }
}
