import {
  ComponentFactoryResolver,
  Inject,
  ViewContainerRef
} from '@angular/core';
import { Component, ViewContainerRefShim } from '../../standaloneShim';

@Component({
  selector: 'dynamically-loading-component',
  standalone: true,
  template: 'dynamically loaded: '
})
export class DynamicallyLoadingComponent {
  vcRef: ViewContainerRefShim;

  // Hack: this will not be needed in the final version, one would just inject a ViewContainerRef
  constructor(
    // TODO: Why is @Inject required here at all? It shouldn't be, the type should be enough...
    @Inject(ViewContainerRef) vcRef: ViewContainerRef,
    @Inject(ComponentFactoryResolver) cfResolver: ComponentFactoryResolver
  ) {
    this.vcRef = new ViewContainerRefShim(vcRef, cfResolver);
  }

  // TODO: this code only works because the loaded component is registered in AppModule, this should not be required!
  async ngOnInit() {
    // TODO: Why doesn't the following work?!?!
    //       it seems that we don't propagate CD ticks, or something like that
    // const {
    //   DynamicallyLoadedComponent
    // } = await import('./dynamicallyLoaded.component');
    // this.vcRef.createComponent(DynamicallyLoadedComponent);

    // TODO: This version works, even though it should be equivalent...
    import('./dynamicallyLoaded.component').then(
      esModule =>
        this.vcRef.createComponent(esModule.DynamicallyLoadedComponent),
      err => console.log(err)
    );
  }
}
