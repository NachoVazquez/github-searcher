import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { SearchPaginationComponent } from './search-pagination/search-pagination.component';

@NgModule({
  imports: [CommonModule, MatPaginatorModule],
  declarations: [SearchPaginationComponent],
  exports: [SearchPaginationComponent],
})
export class GithubSearcherUserSearchFeatureSearchPaginationModule {}
