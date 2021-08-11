import { Component } from '../../standaloneShim';

@Component({
  selector: 'first-standalone-component',
  standalone: true,
  template: `
    I'm first!
    <button (click)="confirm()">click to confirm</button>
  `
})
export class FirstStandaloneComponent {
  confirm() {
    console.log('confirmed!');
  }
}
