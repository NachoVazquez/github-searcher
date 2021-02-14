import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserListUiComponent } from './user-list-ui/user-list-ui.component';
import { UserListItemUiComponent } from './user-list-item-ui/user-list-item-ui.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatListModule],
  declarations: [UserListUiComponent, UserListItemUiComponent],
  exports: [UserListUiComponent],
})
export class GithubSearcherUserSearchUiUserListModule {}
