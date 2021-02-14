import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { userSearchItems } from '@github-searcher/github-searcher/user-search/shared/utils-test';
import { GithubUser } from '@github-searcher/github-searcher/user-search/domain';
import {
  State,
  UserSearchActions,
  UserSearchSelectors,
} from '@github-searcher/github-searcher/user-search/data-access';

import { UserListComponent } from './user-list.component';

@Component({ selector: 'github-searcher-user-list-ui', template: '' })
class UserListUiDoubleComponent {
  @Input() userList: GithubUser[] | null = [];
  @Output() selectUser = new EventEmitter<GithubUser>();
}

describe(UserListComponent.name, () => {
  let fixture: ComponentFixture<UserListComponent>;
  let container: UserListComponent;

  let mockStore: MockStore;
  let mockUsersSelector: MemoizedSelector<State, GithubUser[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [UserListComponent, UserListUiDoubleComponent],
    });

    mockStore = TestBed.inject(MockStore);
    spyOn(mockStore, 'dispatch');
    fixture = TestBed.createComponent(UserListComponent);
    container = fixture.componentInstance;

    mockUsersSelector = mockStore.overrideSelector(
      UserSearchSelectors.selectAllUsers,
      []
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(container).toBeDefined();
  });

  describe('get users from the store', () => {
    it('should have emitted empty users after subscribing', () => {
      container.userList$.subscribe(result => {
        expect(result).toEqual([]);
      });
    });

    it('should get users using the store when populated', () => {
      mockUsersSelector.setResult(userSearchItems);
      mockStore.refreshState();
      container.userList$.subscribe(result => {
        expect(result).toEqual(userSearchItems);
      });
    });
  });

  describe('selectUser', () => {
    it('should emit an action when the selectUser method is called', () => {
      container.selectUser(userSearchItems[0]);

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        UserSearchActions.selectUser({ user: userSearchItems[0] })
      );
    });
  });
});
