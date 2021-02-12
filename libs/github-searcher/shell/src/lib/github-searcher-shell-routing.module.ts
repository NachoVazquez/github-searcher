import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SelectivePreloadingStrategyService } from '@github-searcher/shared/utils-router';

export const rootRoutes: Route[] = [
  {
    path: 'user-search',
    loadChildren: () =>
      import('@github-searcher/github-searcher/user-search/shell').then(
        m => m.GithubSearcherUserSearchShellModule
      ),
    data: { preload: true },
  },
  { path: '', redirectTo: '/user-search', pathMatch: 'full' },
  { path: '**', redirectTo: '/user-search', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes, {
      initialNavigation: 'enabled',
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class GithubSearcherShellRoutingModule {}
