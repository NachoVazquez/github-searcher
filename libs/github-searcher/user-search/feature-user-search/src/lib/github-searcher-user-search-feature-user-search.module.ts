import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { GithubSearcherUserSearchFeatureSearchBarModule } from '@github-searcher/github-searcher/user-search/feature-search-bar';
import { GithubSearcherUserSearchFeatureSearchFiltersModule } from '@github-searcher/github-searcher/user-search/feature-search-filters';
import { GithubSearcherUserSearchFeatureSearchResultsModule } from '@github-searcher/github-searcher/user-search/feature-search-results';

import { UserSearchComponent } from './user-search';

@NgModule({
  imports: [
    GithubSearcherUserSearchFeatureSearchBarModule,
    GithubSearcherUserSearchFeatureSearchFiltersModule,
    GithubSearcherUserSearchFeatureSearchResultsModule,
    MatDividerModule,
  ],
  declarations: [UserSearchComponent],
})
export class GithubSearcherUserSearchFeatureUserSearchModule {}
