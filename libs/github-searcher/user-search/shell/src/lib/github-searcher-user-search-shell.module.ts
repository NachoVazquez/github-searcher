import { NgModule } from '@angular/core';

import { GithubSearcherUserSearchDataAccessModule } from '@github-searcher/github-searcher/user-search/data-access';

import { GithubSearcherUserSearchShellRoutingModule } from './github-searcher-user-search-shell-routing.module';

@NgModule({
  imports: [
    GithubSearcherUserSearchDataAccessModule,
    GithubSearcherUserSearchShellRoutingModule,
  ],
})
export class GithubSearcherUserSearchShellModule {}
