import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearcherUserSearchSharedUtilsPipeModule } from '@github-searcher/github-searcher/user-search/shared/utils-pipe';

import { SortBarUiComponent } from './sort-bar-ui/sort-bar-ui.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    GithubSearcherUserSearchSharedUtilsPipeModule,
  ],
  declarations: [SortBarUiComponent],
  exports: [SortBarUiComponent],
})
export class GithubSearcherUserSearchUiSortBarModule {}
