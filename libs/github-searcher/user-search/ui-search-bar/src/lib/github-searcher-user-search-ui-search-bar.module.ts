import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchBarUiComponent } from './search-bar-ui/search-bar-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchBarUiComponent],
  exports: [SearchBarUiComponent],
})
export class GithubSearcherUserSearchUiSearchBarModule {}
