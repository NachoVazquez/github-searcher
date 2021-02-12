import { NgModule } from '@angular/core';

import { UserListUiComponent } from './user-list-ui/user-list-ui.component';
import { UserListItemUiComponent } from './user-list-item-ui/user-list-item-ui.component';

@NgModule({
  declarations: [UserListUiComponent, UserListItemUiComponent],
  exports: [UserListUiComponent],
})
export class GithubSearcherUserSearchUiUserListModule {}
