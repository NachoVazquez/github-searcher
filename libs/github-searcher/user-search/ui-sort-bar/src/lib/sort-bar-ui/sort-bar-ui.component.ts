import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import {
  SortType,
  sortTypes,
} from '@github-searcher/github-searcher/user-search/domain';

@Component({
  selector: 'github-searcher-sort-bar-ui',
  templateUrl: './sort-bar-ui.component.html',
  styleUrls: ['./sort-bar-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortBarUiComponent {
  @Input() totalItems: number | null = 0;
  @Input() sortType: SortType | null = null;

  @Output() updateSortType = new EventEmitter<SortType>();

  sortTypes = sortTypes;

  updateSort(value: SortType): void {
    this.updateSortType.emit(value);
  }
}
