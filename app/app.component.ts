import { Component } from '@angular/core';

@Component({
  selector: 'standalone-component-demo',
  template: `
    <h2>Demo #1: A Simple Component</h2>
    <p>Simple component with no dependencies</p>

    <pre><code ngNonBindable>
      @Component(&#x007B;
        selector: 'first-standalone-component',
        standalone: true,
        template: \`
          I'm first!
          &lt;button (click)="confirm()">click to confirm&lt;/button>
        \`
      })
      export class FirstStandaloneComponent &#x007B;
        confirm() &#x007B;
          console.log('confirmed!');
        }
      }
      
    </code></pre>

    <h3>Output</h3>
    <hr />
    <first-standalone-component></first-standalone-component>
    <hr />

    <!-------------- ------------->

    <h2>Demo #2: Standalone Component that imports an existing NgModule</h2>
    <p>
      This one imports FormsModule - an existing NgModule - to demonstrate
      interop capabilities.
    </p>

    <pre><code ngNonBindable>
      @Component(&#x007B;
        selector: 'standalone-with-import-component',
        standalone: true,
        imports: [FormsModule],
        template: \`
          Forms work!
          &lt;input [(ngModel)]="name" />
          (name = {{ name }})
        \`
      })
      export class StandaloneWithImportComponent &#x007B;
        name = 'Daft Punk';
      }
    </code></pre>

    <h3>Output</h3>
    <standalone-with-import-component></standalone-with-import-component>
    <hr />

    <!-------------- ------------->

    <h2>Demo #3: Standalone Component that imports a standalone Component</h2>
    <p>
      This one imports <code>FirstStandaloneComponent</code> to show off
      composability.
    </p>

    <pre><code ngNonBindable>
      @Component(&#x007B;
        selector: 'standalone-importing-standalone-component',
        standalone: true,
        imports: [FirstStandaloneComponent],
        template: \`
          Turtles all the way down:
          &lt;first-standalone-component>&lt;/first-standalone-component>
        \`
      })
      export class StandaloneImportingStandaloneComponent &#x007B;}
    </code></pre>

    <h3>Output</h3>
    <standalone-importing-standalone-component></standalone-importing-standalone-component>
    <hr />

    <!-------------- ------------->

    <h2>Demo #4: Standalone Component with Multi Providers</h2>
    <p>
      This one provides a multiprovider which it then uses in the template.
    </p>

    <pre><code ngNonBindable>
  
</code></pre>

    <standalone-with-providers-component></standalone-with-providers-component>
  `
})
export class AppComponent {}
