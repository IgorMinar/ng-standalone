import { Component, Directive, Pipe } from '../../standaloneShim';
import { PipeTransform } from '@angular/core';

@Directive({
  selector: '[blueBorder]',
  standalone: true,
  host: {
    style: 'border: 2px dashed blue'
  }
})
class BlueBorderDirective {}

@Pipe({
  name: 'blackHole',
  standalone: true
})
class BlackHolePipe implements PipeTransform {
  transform(value) {
    return '';
  }
}

@Component({
  selector: 'exported-child-component',
  standalone: true,
  styles: [':host { border: 1px dashed red }'],
  template: `
    I'm an exported child component
  `
})
class ExportedChildComponent {}

@Component({
  selector: 'exporting-component',
  standalone: true,
  exports: [BlueBorderDirective, BlackHolePipe, ExportedChildComponent],
  styles: [':host { display: block }'],
  template: `
    I bring some friends along!
    <button (click)="confirm()">click to confirm</button>
    {{ counter }}
    <hr />
    <ng-content></ng-content>
  `
})
export class ExportingComponent {
  counter = 0;

  confirm() {
    this.counter++;
    console.log('confirmed!');
  }
}
