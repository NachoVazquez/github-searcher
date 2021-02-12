import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '@github-searcher/github-searcher/shared/environments';
import { GithubSearcherShellModule } from '@github-searcher/github-searcher/shell';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(GithubSearcherShellModule)
  .catch(err => console.error(err));
