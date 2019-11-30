import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  import('@angular/core').then(({ enableProdMode }) => {
      enableProdMode();
  });
}

import('@angular/platform-browser-dynamic').then(({ platformBrowserDynamic }) => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
});
