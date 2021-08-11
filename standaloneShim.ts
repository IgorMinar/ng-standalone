import { Component as NgComponent, Directive as NgDirective, Pipe as NgPipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function Component(
  componentMetadata: NgComponent & {
    standalone: true;
    imports?: unknown[];
  }
): ClassDecorator {
  //console.log(`Standalone @Component declared:`, componentMetadata);

  const ngComponentDecorator = NgComponent(componentMetadata);

  const processedImports = componentMetadata.imports?.map((importable) => importable['module'] ?? importable) ?? [];

  return function(componentClazz) {
    @NgModule({
      declarations: [[componentClazz]],
      exports: [[componentClazz]],
      // TODO: is it a good idea to include CommonModule by default?
      imports: [CommonModule, processedImports]
    })
    class VirtualNgModule {}

    componentClazz['module'] = VirtualNgModule;

    return ngComponentDecorator(componentClazz);
  };
}


export function Directive(
  directiveMedatada: NgDirective & {
    standalone: true;
    imports?: unknown[];
  }
): ClassDecorator {
  //console.log(`Standalone @Directive declared:`, directiveMedatada);

  const ngDirectiveDecorator = NgDirective(directiveMedatada);

  const processedImports = directiveMedatada.imports?.map((importable) => importable['module'] ?? importable) ?? [];

  return function(directiveClazz) {
    @NgModule({
      declarations: [[directiveClazz]],
      exports: [[directiveClazz]],
      imports: [processedImports]
    })
    class VirtualNgModule {}

    directiveClazz['module'] = VirtualNgModule;

    return ngDirectiveDecorator(directiveClazz);
  };
}


export function Pipe(
  pipeMetadata: NgPipe & {
    standalone: true;
    imports?: unknown[];
  }
): ClassDecorator {
  //console.log(`Standalone @Pipe declared:`, pipeMetadata);

  const ngPipeDecorator = NgPipe(pipeMetadata);

  const processedImports = pipeMetadata.imports?.map((importable) => importable['module'] ?? importable) ?? [];

  return function(pipeClazz) {
    @NgModule({
      declarations: [[pipeClazz]],
      exports: [[pipeClazz]],
      imports: [processedImports]
    })
    class VirtualNgModule {}

    pipeClazz['module'] = VirtualNgModule;

    return ngPipeDecorator(pipeClazz);
  };
}
