import {
  ComponentFactoryResolver,
  Inject,
  ViewContainerRef
} from '@angular/core';
import {
  Component,
  viewContainerRefShim,
  ViewContainerRefShim
} from '../../standaloneShim';
import { FirstStandaloneComponent } from '../demo1/firstStandalone.component';

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

  ngOnInit() {
    // TODO: Why doesn't the following work?!?!
    //       it seems that we don't propagate CD ticks, or something like that
    // const {StandaloneWithProvidersComponent} = await import('../demo4/standaloneWithProviders.component');
    // this.vcRef.createComponent(StandaloneWithProvidersComponent)

    // TODO: This version works, even though it should be equivalent...
    import('../demo4/standaloneWithProviders.component').then(
      esModule =>
        this.vcRef.createComponent(esModule.StandaloneWithProvidersComponent),
      err => console.log(err)
    );
  }
}
