import { Component } from '@angular/core';

@Component({
  selector: 'standalone-component-demo',
  template: `
    <h2>Simple Component Demo</h2>
    <p>Simple component with no dependencies</p>

    <pre><code ngNonBindable>
      @Component({{
        selector: 'first-standalone-component',
        standalone: true,
        template: \`
          I'm first!
          &lt;button (click)="confirm()">click to confirm&lt;/button>
        \`
      })
      export class FirstStandaloneComponent {{
        confirm() {
          console.log('confirmed!');
        }
      }
      
    </code></pre>

    <h3>Output</h3>
    <hr />
    <first-standalone-component></first-standalone-component>
    <hr />
  `
})
export class AppComponent {}
