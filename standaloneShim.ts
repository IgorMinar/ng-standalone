import { Component as NgComponent, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function Component(
  componentMetadata: NgComponent & { standalone: true }
): ClassDecorator {
  console.log(`Standalone @Component declared:`, componentMetadata);

  const ngComponentDecorator = NgComponent(componentMetadata);

  return function(componentClazz) {
    @NgModule({
      declarations: [[componentClazz]],
      exports: [[componentClazz]],
      imports: [CommonModule]
    })
    class VirtualNgModule {}

    return ngComponentDecorator(componentClazz);
  };
}
