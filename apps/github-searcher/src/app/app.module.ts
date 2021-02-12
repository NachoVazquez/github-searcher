import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutUiComponent } from '@github-searcher/github-searcher/core/ui-layout';
import { GithubSearcherShellModule } from '@github-searcher/github-searcher/shell';

@NgModule({
  imports: [
    GithubSearcherShellModule,

    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [LayoutUiComponent],
})
export class AppModule {}
