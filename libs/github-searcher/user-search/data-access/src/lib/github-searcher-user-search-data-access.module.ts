import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUserSearch from './store/reducers';
import { UserSearchEffects } from './store/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromUserSearch.USER_SEARCH_FEATURE_KEY,
      fromUserSearch.reducers
    ),
    EffectsModule.forFeature([UserSearchEffects]),
  ],
})
export class GithubSearcherUserSearchDataAccessModule {}
