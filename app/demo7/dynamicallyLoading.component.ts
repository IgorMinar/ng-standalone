import {
  ComponentFactoryResolver,
  Inject,
  ViewContainerRef,
} from '@angular/core';
import { Component, ViewContainerRefShim } from '../../standaloneShim';

@Component({
  selector: 'dynamically-loading-component',
  standalone: true,
  template: 'dynamically loaded: ',
})
export class DynamicallyLoadingComponent {
  vcRef: ViewContainerRefShim;

  // Hack: this will not be needed in the final version, one would just inject a ViewContainerRef
  constructor(
    // Hack: @Inject is required here, this will not be needed in the final version
    @Inject(ViewContainerRef) vcRef: ViewContainerRef,
    @Inject(ComponentFactoryResolver) cfResolver: ComponentFactoryResolver
  ) {
    this.vcRef = new ViewContainerRefShim(vcRef, cfResolver);
  }

  ngOnInit() {
    import('./dynamicallyLoaded.component').then((m) =>
      this.vcRef.createComponent(m.DynamicallyLoadedComponent)
    );
  }
}
