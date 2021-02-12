import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUserSearch from './store/user-search.reducer';
import { UserSearchEffects } from './store/user-search.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromUserSearch.USER_SEARCH_FEATURE_KEY,
      fromUserSearch.reducer
    ),
    EffectsModule.forFeature([UserSearchEffects]),
  ],
})
export class GithubSearcherUserSearchDataAccessModule {}
