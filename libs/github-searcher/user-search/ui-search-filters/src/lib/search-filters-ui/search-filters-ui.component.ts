import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { GithubUserQuery } from '@github-searcher/github-searcher/user-search/domain';

@Component({
  selector: 'github-searcher-search-filters-ui',
  templateUrl: './search-filters-ui.component.html',
  styleUrls: ['./search-filters-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersUiComponent {
  @Input() userFilters: GithubUserQuery | null = null;
  @Output() updateUserFilters = new EventEmitter<GithubUserQuery>();

  rangePattern = '^([0-9]+)$|([0-9]+..[0-9]+)$|(<[0-9]+)$|(>[0-9]+)$';

  updateLocationFilter(value: string): void {
    this.updateUserFilters.emit({ ...this.userFilters, location: value });
  }

  updateFollowersFilter(value: string): void {
    this.updateUserFilters.emit({ ...this.userFilters, followers: value });
  }

  updateRepositoriesFilter(value: string): void {
    this.updateUserFilters.emit({ ...this.userFilters, repositories: value });
  }
}
