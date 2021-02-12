import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserListUiComponent } from './user-list-ui/user-list-ui.component';
import { UserListItemUiComponent } from './user-list-item-ui/user-list-item-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserListUiComponent, UserListItemUiComponent],
})
export class GithubSearcherUserSearchUiUserListModule {}
