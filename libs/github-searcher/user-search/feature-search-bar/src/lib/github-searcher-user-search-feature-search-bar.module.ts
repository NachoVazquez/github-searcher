import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GithubSearcherUserSearchUiSearchBarModule } from '@github-searcher/github-searcher/user-search/ui-search-bar';

import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [CommonModule, GithubSearcherUserSearchUiSearchBarModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class GithubSearcherUserSearchFeatureSearchBarModule {}
