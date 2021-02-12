import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { UserSearchEffects } from './user-search.effects';

describe('UserSearchEffects', () => {
  let actions: Observable<unknown>;
  // let effects: UserSearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserSearchEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    // effects = TestBed.inject(UserSearchEffects);
  });
});
