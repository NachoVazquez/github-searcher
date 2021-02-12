import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserSearchComponent } from '@github-searcher/github-searcher/user-search/feature-user-search';

export const userSearchRoutes: Route[] = [
  {
    path: '',
    component: UserSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(userSearchRoutes)],
})
export class GithubSearcherUserSearchShellRoutingModule {}
