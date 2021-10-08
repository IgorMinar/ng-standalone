import { Component, ElementRef, Inject } from '@angular/core';

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
      imports: [CommonModule, MyNgModuleWithProvider],      
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
    <p>
      Standalone components can be dynamically loaded.
    </p>

    <pre><code ngNonBindable>
      @Component(&#x007B;
        selector: 'dynamically-loading-component',
        standalone: true,
        template: 'dynamically loaded: '
      })
      export class DynamicallyLoadingComponent &#x007B;
        constructor(
          private vcRef: ViewContainerRef,
        ) &#x007B;}

        ngOnInit() &#x007B;
          import('./dynamicallyLoaded.component').then((m) =>
            this.vcRef.createComponent(m.DynamicallyLoadedComponent)
          );
        }
      }

    </code></pre>

    <h3>Output</h3>
    <hr />
    <dynamically-loading-component></dynamically-loading-component>
    <hr />

    <h2>Demo #8: Bootstrap standalone component</h2>
    <p>
      Standalone components can be bootstrapped!
    </p>

    <pre><code ngNonBindable>
      @Component(&#x007B;
        selector: 'bootstrapped-standalone-component',
        standalone: true,
        template: \`
          I'm bootstrapped!
          &lt;button (click)="confirm()">click to confirm&lt;/button>
          &#x007B;&#x007B; counter }}
        \`
      })
      export class BootstrappedStandaloneComponent &#x007B;
        counter = 0;
      
        confirm() &#x007B;
          this.counter++;
          console.log('confirmed!');
        }
      }
      <hr>
      
      &lt;bootstrapped-standalone-component>&lt;/bootstrapped-standalone-component>

      <hr>

      bootstrapComponent(BootstrappedStandaloneComponent).then(() => &#x007B;
        console.log('bootstrapped standalone component!');
      });
    </code></pre>

    <h3>Output</h3>
    <hr />

    <div id="boostrappedStandaloneComponentPlaceholder"></div>
    <hr />
  `,
})
export class AppComponent {
  constructor(@Inject(ElementRef) private elementRef: ElementRef) {}

  ngOnInit() {
    // TODO: is this is easiest way to get Angular to ignore the element to be
    // bootstrapped? ngNonBindable seemed to work at first, but not it doesn't
    // so I ended up doing this... :-|
    this.elementRef.nativeElement
      .querySelector('#boostrappedStandaloneComponentPlaceholder')
      .appendChild(document.createElement('bootstrapped-standalone-component'));
  }
}
