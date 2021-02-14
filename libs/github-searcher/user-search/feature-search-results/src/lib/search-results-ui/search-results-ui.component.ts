import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'github-searcher-search-results-ui',
  templateUrl: './search-results-ui.component.html',
  styleUrls: ['./search-results-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsUiComponent {
  @Input() isSearching: boolean | null = false;
  @Input() searchHasRan: boolean | null = false;
  @Input() isCurrentSearchSuccessful: boolean | null = false;
  @Input() isCurrentSearchFailure: boolean | null = false;
  @Input() searchError: string | null | undefined;
}
