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
          &#x007B;&#x007B;counter}}
        \`
      })
      export class FirstStandaloneComponent &#x007B;
        counter = 0;

        confirm() &#x007B;
          this.counter++;
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
          (name = &#x007B;&#x007B; name }})
        \`
      })
      export class StandaloneWithImportComponent &#x007B;
        name = 'Daft Punk';
      }
    </code></pre>

    <h3>Output</h3>
    <hr />
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
    <hr />
    <standalone-importing-standalone-component></standalone-importing-standalone-component>
    <hr />

    <!-------------- ------------->

    <h2>Demo #4: Standalone Component with Multi Providers</h2>
    <p>
      This one provides a multiprovider which it then uses in the template.
    </p>

    <pre><code ngNonBindable>
    export const locale = new InjectionToken&lt;string[]>('locale');

    @NgModule(&#x007B;
      providers: [
        &#x007B; provide: locale, multi: true, useValue: 'en' },
        &#x007B; provide: locale, multi: true, useValue: 'sk' }
      ]
    })
    class MyNgModuleWithProvider &#x007B;}
    
    @Component(&#x007B;
      selector: 'standalone-with-providers-component',
      standalone: true,
      imports: [MyNgModuleWithProvider],
      // TODO: should this be explicit?
      // imports: [CommonModule]
      template: \`
        Supported locales:
        &lt;ul>
          &lt;li *ngFor="let locale of locales">&#x007B;&#x007B; locale }}&lt;/li>
        &lt;/ul>
      \`
    })
    export class StandaloneWithProvidersComponent &#x007B;
      constructor(@Inject(locale) protected locales) &#x007B;}
    }
    
    </code></pre>

    <h3>Output</h3>
    <hr />
    <standalone-with-providers-component></standalone-with-providers-component>
    <hr />

    <!-------------- ------------->

    <h2>Demo #5: Standalone Directive</h2>
    <p>
      This shows that standalone directives work in the same style as standalone
      components.
    </p>

    <pre><code ngNonBindable>
      @Directive(&#x007B;
        selector: '[standaloneRedBorder]',
        standalone: true,
        host: &#x007B;
          style: 'border: 2px dashed red'
        }
      })
      export class StandaloneRedBorderDirective &#x007B;}

      &lt;first-standalone-component standaloneRedBorder>&lt;/first-standalone-component>
    </code></pre>

    <h3>Output</h3>
    <hr />
    <first-standalone-component
      standaloneRedBorder
    ></first-standalone-component>
    <hr />

    <!-------------- ------------->

    <h2>Demo #6: Standalone Pipe</h2>
    <p>
      This shows that standalone pipe work just fine as well.
    </p>

    <pre><code ngNonBindable>
      @Pipe(&#x007B;
        name: 'standaloneStar',
        standalone: true
      })
      export class StandaloneStarPipe &#x007B;
        transform(value) &#x007B;
          const stars = new Array(value.length);
          return stars.fill('*').join('');
        }
      }

      &#x007B;&#x007B; 'hello there' | standaloneStarPipe }}
    </code></pre>

    <h3>Output</h3>
    <hr />
    {{ 'hello there' | standaloneStar }}
    <hr />

    <!-------------- ------------->

    <h2>Demo #7: Dynamically Loaded Standalone Component</h2>
    <b>THIS DEMO IS WIP AND NOT YET WORKING CORRECTLY</b>
    <p>
      Standalone components can be dynamically loaded.
    </p>

    <pre><code ngNonBindable>
      export class DynamicallyLoadingComponent &#x007B;
        constructor(
          private vcRef: ViewContainerRef,
        ) &#x007B;}

        async ngOnInit() &#x007B;
          const &#x007B; DynamicallyLoadedComponent } = await import('./dynamicallyLoaded.component');
          this.vcRef.createComponent(DynamicallyLoadedComponent);
        }
      }

    </code></pre>

    <h3>Output (WIP: not yet working without major hacks)</h3>
    <hr />
    <dynamically-loading-component></dynamically-loading-component>
    <hr />

    <!-------------- ------------->

    <h2>Demo #8: Exporting Component - Support for collection of entities</h2>
    <p>
      Standalone components can export other standalone entities, to support
      use-cases where a single primary entity (usually a component) optionally
      cooperates with other directives, components, and pipes to enhance it's
      functionality.
    </p>

    <p>
      Typical examples of this use-case are
      <a href="https://material.angular.io/components/tabs/api"
        >Angular Material Tabs</a
      >,
      <a href="https://material.angular.io/components/table/api"
        >Angular Material Table</a
      >, and
      <a href="https://ng-bootstrap.github.io/#/components/carousel/api"
        >ng-bootstrap Carousel</a
      >
    </p>

    <pre><code ngNonBindable>
      @Directive(&#x007B;
        selector: '[blueBorder]',
        standalone: true,
        host: &#x007B;
          style: 'border: 2px dashed blue'
        }
      })
      class BlueBorderDirective &#x007B;}
      
      @Pipe(&#x007B;
        name: 'blackHole',
        standalone: true
      })
      class BlackHolePipe implements PipeTransform &#x007B;
        transform(value) &#x007B;
          return '';
        }
      }
      
      @Component(&#x007B;
        selector: 'exported-child-component',
        standalone: true,
        styles: [':host &#x007B; display: block; border: 1px dashed red }'],
        template: \`
          I'm an exported child component
        \`
      })
      class ExportedChildComponent &#x007B;}
      
      @Component(&#x007B;
        selector: 'exporting-component',
        standalone: true,
        exports: [BlueBorderDirective, BlackHolePipe, ExportedChildComponent],
        styles: [':host &#x007B; display: block }'],
        template: \`
          I bring some friends along!
          &lt;button (click)="confirm()">click to confirm&lt;/button>
          &#x007B;&#x007B; counter }}
          &lt;hr />
          &lt;ng-content>&lt;/ng-content>
        \`
      })
      export class ExportingComponent &#x007B;
        counter = 0;
      
        confirm() &#x007B;
          this.counter++;
          console.log('confirmed!');
        }
      }

      <hr>

      &lt;exporting-component blueBorder>
        {{ "can you see this? I bet you can\'t!" | blackHole }}
        &lt;exported-child-component>&lt;/exported-child-component>
      &lt;/exporting-component>
    </code></pre>

    <h3>Output</h3>
    <hr />
    <exporting-component blueBorder>
      {{ "can you see this? I bet you can't" | blackHole }}
      <exported-child-component></exported-child-component>
    </exporting-component>
    <hr />
  `
})
export class AppComponent {}
