import { NgModule } from '@angular/core';

import { GithubSearcherUserSearchUiSearchFiltersModule } from '@github-searcher/github-searcher/user-search/ui-search-filters';

import { SearchFiltersComponent } from './search-filters/search-filters.component';

@NgModule({
  imports: [GithubSearcherUserSearchUiSearchFiltersModule],
  declarations: [SearchFiltersComponent],
  exports: [SearchFiltersComponent],
})
export class GithubSearcherUserSearchFeatureSearchFiltersModule {}
