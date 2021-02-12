import { createAction, props } from '@ngrx/store';

import { UserSearchEntity } from './user-search.models';

export const init = createAction('[UserSearch Page] Init');

export const loadUserSearchSuccess = createAction(
  '[UserSearch/API] Load UserSearch Success',
  props<{ userSearch: UserSearchEntity[] }>()
);

export const loadUserSearchFailure = createAction(
  '[UserSearch/API] Load UserSearch Failure',
  props<{ error: unknown }>()
);
