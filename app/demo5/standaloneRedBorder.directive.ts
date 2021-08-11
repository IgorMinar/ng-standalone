import { Directive } from '../../standaloneShim';

@Directive({
  selector: '[standaloneRedBorder]',
  standalone: true,
  host: {
    style: 'border: 2px dashed red'
  }
})
export class StandaloneRedBorderDirective {}
