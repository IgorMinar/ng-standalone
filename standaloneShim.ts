import {
  Component as NgComponent,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

export function Component(
  componentMetadata: NgComponent & {
    standalone: true;
    imports: unknown[];
  }
): ClassDecorator {
  console.log(`Standalone @Component declared:`, componentMetadata);

  const ngComponentDecorator = NgComponent(componentMetadata);

  return function(componentClazz) {
    @NgModule({
      declarations: [[componentClazz]],
      exports: [[componentClazz]],
      imports: [CommonModule, componentMetadata.imports || []]
    })
    class VirtualNgModule {}

    componentClazz['module'] = VirtualNgModule;

    return ngComponentDecorator(componentClazz);
  };
}
