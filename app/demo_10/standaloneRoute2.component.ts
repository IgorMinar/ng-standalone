import { Component } from '../../standaloneShim';
import { forwardRef } from '@angular/core';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: forwardRef(() => StandaloneRoute2Component)
  }
];

@Component({
  selector: 'standalone-route-2-component',
  standalone: true,
  template: 'Route 2 content!'
})
export class StandaloneRoute2Component {}
