import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function Component(
  componentMetadata: Component & { standalone: true }
): ClassDecorator {
  console.log(`Standalone @Component declared:`, componentMetadata);

  const compotentClazz = Component(componentMetadata);

  @NgModule({
    declarations: [[compotentClazz]],
    imports: [CommonModule]
  })
  class VirtualNgModule {}

  return compotentClazz;
}
