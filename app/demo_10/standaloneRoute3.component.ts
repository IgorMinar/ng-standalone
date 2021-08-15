import { Component } from '../../standaloneShim';
import { forwardRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: forwardRef(() => StandaloneRoute3Component)
  }
];

@Component({
  selector: 'standalone-route-3-component',
  standalone: true,
  // TODO: this should work but doesn't because forChild, provides ANALYZE_FOR_ENTRY_COMPONENTS
  // which is used to JIT compile components, but since StandaloneRoute2Component's module is
  // virtual it's not visible to the JIT compiler which then complains that
  // StandaloneRoute2Component is not defined in any NgModule.
  // It's not clear how to fix this ATM
  //   – maybe we need to make the JIT compiler aware of VirtualNgModules? dunno...
  //   - factory-less APIs could help here as well...
  imports: [RouterModule.forChild(routes)],
  template: 'Lazy Route 3 content!'
})
export class StandaloneRoute3Component {}
