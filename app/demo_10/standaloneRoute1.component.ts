import { Component } from '../../standaloneShim';
import { forwardRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     component: forwardRef(() => StandaloneRoute1Component)
//   }
// ];

@Component({
  selector: 'standalone-route-1-component',
  standalone: true,
  //imports: [RouterModule.forChild(routes)],
  template: 'Route 1 content!'
})
export class StandaloneRoute1Component {}
