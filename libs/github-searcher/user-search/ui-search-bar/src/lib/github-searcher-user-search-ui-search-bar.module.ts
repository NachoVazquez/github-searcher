import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { SearchBarUiComponent } from './search-bar-ui/search-bar-ui.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
  ],
  declarations: [SearchBarUiComponent],
  exports: [SearchBarUiComponent],
})
export class GithubSearcherUserSearchUiSearchBarModule {}
