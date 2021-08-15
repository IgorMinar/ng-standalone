import { Component } from '../../standaloneShim';
import { forwardRef, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TODO: It seems really silly that for leaf child routes, we require this boiler-plate.
//       Could we make it so that you simply export a standalone component and if it has
//       no child Routes then we consider it to be the leaf, and that's that?
const routes: Routes = [
  {
    path: '',
    component: forwardRef(() => StandaloneRoute3Component)
  }
];

@Component({
  selector: 'standalone-route-3-component',
  standalone: true,
  // TODO: this import should work but doesn't because forChild, provides ANALYZE_FOR_ENTRY_COMPONENTS
  // which is used to JIT compile components, but since StandaloneRoute2Component's module is
  // virtual it's not visible to the JIT compiler which then complains that
  // StandaloneRoute2Component is not defined in any NgModule.
  // It's not clear how to fix this ATM
  //   – maybe we need to make the JIT compiler aware of VirtualNgModules? dunno...
  //   - factory-less APIs could help here as well...
  //
  // Error: Component StandaloneRoute3Component is not part of any NgModule or the module has not been imported into your module.
  imports: [RouterModule.forChild(routes)],
  template: 'Lazy Route 3 content!'
})
export class StandaloneRoute3Component {}

// I tried working around the issue using an intermediate NgModule, but it fails in the same way
//
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   declarations: [StandaloneRoute3Component],
//   exports: [StandaloneRoute3Component]
// })
// export default class LazyRoutingHackNgModule {}
