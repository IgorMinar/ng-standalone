import { Component } from '../../standaloneShim';

@Component({
  selector: 'bootstrapped-standalone-component',
  standalone: true,
  template: `
    I'm bootstrapped!
    <button (click)="confirm()">click to confirm</button>
    {{ counter }}
  `
})
export class BootstrappedStandaloneComponent {
  counter = 0;

  confirm() {
    this.counter++;
    console.log('confirmed!');
  }
}
