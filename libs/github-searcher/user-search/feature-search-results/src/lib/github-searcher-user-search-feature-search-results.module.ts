import { NgModule } from '@angular/core';

import { GithubSearcherUserSearchFeatureUserListModule } from '@github-searcher/github-searcher/user-search/feature-user-list';
import { GithubSearcherUserSearchFeatureSearchPaginationModule } from '@github-searcher/github-searcher/user-search/feature-search-pagination';

import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  imports: [
    GithubSearcherUserSearchFeatureUserListModule,
    GithubSearcherUserSearchFeatureSearchPaginationModule,
  ],
  declarations: [SearchResultsComponent],
  exports: [SearchResultsComponent],
})
export class GithubSearcherUserSearchFeatureSearchResultsModule {}
