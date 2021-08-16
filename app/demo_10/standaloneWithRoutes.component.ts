import { Component } from '../../standaloneShim';
import { Routes, RouterModule } from '@angular/router';
import { StandaloneRoute1Component } from './standaloneRoute1.component';
import { StandaloneRoute2Component } from './standaloneRoute2.component';

const routes: Routes = [
  {
    path: '',
    // eager
    component: StandaloneRoute1Component
  },
  {
    path: 'route2',
    // eager
    component: StandaloneRoute2Component
  },
  {
    path: 'route3',
    // lazy
    // HACK: this should realy be just:
    //       loadChildren: () => import('./standaloneRoute3.component').StandaloneRoute3Component
    loadChildren: () =>
      import('./standaloneRoute3.component').then(
        m => m.StandaloneRoute3Component['module']
      )
  }
];

@Component({
  selector: 'standalone-with-routes-component',
  standalone: true,
  imports: [
    // TODO: forRoot could reexport the components so that they don't need to be declared here
    StandaloneRoute1Component,
    StandaloneRoute2Component,
    RouterModule.forRoot(routes)
  ],
  template: `
    <button routerLink="">Route 1</button>
    <button routerLink="/route2">Route 2</button>
    <button routerLink="/route3">Lazy Route 3 (WIP: broken)</button>

    <router-outlet style="display: block"></router-outlet>
  `
})
export class StandaloneWithRoutesComponent {}
