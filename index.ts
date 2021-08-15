import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapComponent } from './standaloneShim';
import { AppModule } from './app/app.module';
import { BootstrappedStandaloneComponent } from './app/demo9/boostrappedStandalone.component';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch(err => console.error(err));

// demo #9
setTimeout(() =>
  bootstrapComponent(BootstrappedStandaloneComponent).then(() => {
    console.log('bootstrapped standalone component!');
  })
);
