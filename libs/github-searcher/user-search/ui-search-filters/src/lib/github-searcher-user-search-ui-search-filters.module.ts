import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { SearchFiltersUiComponent } from './search-filters-ui/search-filters-ui.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  declarations: [SearchFiltersUiComponent],
  exports: [SearchFiltersUiComponent],
})
export class GithubSearcherUserSearchUiSearchFiltersModule {}
