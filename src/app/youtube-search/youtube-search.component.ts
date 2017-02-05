import { Component, OnInit} from '@angular/core';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResult} from './search-result';
import { YoutubeService } from './youtube.service';


@Component({
  selector: 'forum-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss'],
  providers: [ YoutubeService ],
})
export class YoutubeSearchComponent implements OnInit {

  results: SearchResult[];


  constructor() { }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log("results:", this.results); // uncomment to take a look
  }

  ngOnInit() {
  }

}
