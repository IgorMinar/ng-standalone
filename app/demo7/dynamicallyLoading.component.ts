import { Inject, ViewContainerRef } from '@angular/core';
import {
  Component,
  viewContainerRefShim,
  ViewContainerRefShim
} from '../../standaloneShim';
import { FirstStandaloneComponent } from '../demo1/firstStandalone.component';

@Component({
  selector: 'dynamically-loading-component',
  standalone: true,
  template: 'dynamically loaded: ',
  // Hack: the next line will not be needed in the final version
  providers: [viewContainerRefShim]
})
export class DynamicallyLoadingComponent {
  constructor(
    // TODO: why is @Inject required here? Some weird JIT thing?
    @Inject(ViewContainerRefShim) viewContainerRef: ViewContainerRefShim
  ) {
    viewContainerRef.createComponent(FirstStandaloneComponent);
  }
}
