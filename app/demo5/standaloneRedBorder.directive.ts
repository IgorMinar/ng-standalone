import { Directive } from '../../standaloneShim';

@Directive({
  selector: '[standaloneRedBorder]',
  standalone: true,
  host: {
    style: 'border: 1px solid red'
  }
})
export class StandaloneRedBorderDirective {}
