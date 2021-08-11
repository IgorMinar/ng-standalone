import {
  Component as NgComponent,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

export function Component(
  componentMetadata: NgComponent & {
    standalone: true;
    imports?: unknown[];
  }
): ClassDecorator {
  console.log(`Standalone @Component declared:`, componentMetadata);

  const ngComponentDecorator = NgComponent(componentMetadata);

  const processedImports = componentMetadata.imports?.map((importable) => importable['module'] ?? importable) ?? [];

  return function(componentClazz) {
    @NgModule({
      declarations: [[componentClazz]],
      exports: [[componentClazz]],
      imports: [CommonModule, processedImports]
    })
    class VirtualNgModule {}

    componentClazz['module'] = VirtualNgModule;

    return ngComponentDecorator(componentClazz);
  };
}
