import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GithubSearcherShellModule } from '@github-searcher/github-searcher/shell';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

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
