import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GithubSearcherShellModule } from '@github-searcher/github-searcher/shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    GithubSearcherShellModule,

    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
