import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

// import * as UserSearchActions from './user-search.actions';

@Injectable()
export class UserSearchEffects {
  constructor(private actions$: Actions) {}
}
