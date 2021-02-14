import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { GithubSearcherUserSearchFeatureUserListModule } from '@github-searcher/github-searcher/user-search/feature-user-list';
import { GithubSearcherUserSearchFeatureSearchPaginationModule } from '@github-searcher/github-searcher/user-search/feature-search-pagination';

import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultsUiComponent } from './search-results-ui/search-results-ui.component';
import { SearchErrorUiComponent } from './search-error-ui/search-error-ui.component';

@NgModule({
  imports: [
    CommonModule,
    GithubSearcherUserSearchFeatureUserListModule,
    GithubSearcherUserSearchFeatureSearchPaginationModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  declarations: [
    SearchResultsComponent,
    SearchResultsUiComponent,
    SearchErrorUiComponent,
  ],
  exports: [SearchResultsComponent],
})
export class GithubSearcherUserSearchFeatureSearchResultsModule {}
