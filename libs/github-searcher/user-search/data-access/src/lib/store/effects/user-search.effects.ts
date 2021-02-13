import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { UserSearchService } from '../../services';
import { UserSearchActions, UserSearchAPIActions } from '../actions';

@Injectable()
export class UserSearchEffects {
  searchGithubUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserSearchActions.searchGithubUsers),
      switchMap(({ userSearch }) =>
        this.userSearchService.search(userSearch).pipe(
          switchMap(userPartialResult => {
            return forkJoin(
              userPartialResult.items.map(user =>
                this.userSearchService.getByHandle(user.login)
              )
            ).pipe(
              map(users =>
                UserSearchAPIActions.searchGithubUsersSuccess({
                  userSearchResult: { ...userPartialResult, items: users },
                })
              ),
              catchError(error =>
                of(
                  UserSearchAPIActions.searchGithubUsersFailure({
                    error: error.message || String(error),
                  })
                )
              )
            );
          }),
          catchError(error =>
            of(
              UserSearchAPIActions.searchGithubUsersFailure({
                error: error.message || String(error),
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userSearchService: UserSearchService
  ) {}
}
