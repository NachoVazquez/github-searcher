import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearcherUserSearchUiSortBarModule } from '@github-searcher/github-searcher/user-search/ui-sort-bar';

import { SortBarComponent } from './sort-bar/sort-bar.component';

@NgModule({
  imports: [CommonModule, GithubSearcherUserSearchUiSortBarModule],
  declarations: [SortBarComponent],
  exports: [SortBarComponent],
})
export class GithubSearcherUserSearchFeatureSortBarModule {}
