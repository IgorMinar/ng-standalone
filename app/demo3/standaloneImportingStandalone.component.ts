import { Component } from '../../standaloneShim';
import { FirstStandaloneComponent } from '../demo1/firstStandalone.component';

@Component({
  selector: 'standalone-importing-standalone-component',
  standalone: true,
  imports: [FirstStandaloneComponent],
  template: `
    Turtles all the way down:
    <first-standalone-component></first-standalone-component>
  `
})
export class StandaloneImportingStandaloneComponent {}
