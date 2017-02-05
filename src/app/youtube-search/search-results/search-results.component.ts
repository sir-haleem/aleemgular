import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result';

@Component({
  selector: 'forum-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
