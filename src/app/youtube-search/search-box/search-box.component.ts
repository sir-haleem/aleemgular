import { Component, Output, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { YoutubeService } from '../youtube.service';
import { SearchResult} from '../search-result';

@Component({
  selector: 'forum-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private _youtube: YoutubeService, private _el: ElementRef) { }


  ngOnInit() {
    Observable.fromEvent(this._el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
        .filter((text: string) => text.length > 1) // filter out if empty
          .debounceTime(250) // only once every 250ms
            .do(() => this.loading.next(true)) // enable loading
              // search, discarding old events if new input comes input
              .map((query: string) => this._youtube.search(query))
                .switch()
                  .subscribe(
                    (results: SearchResult[]) => { // on sucesss
                      this.loading.next(false);
                      this.results.next(results);
                    },
                    (error) => { // on error
                      console.log(error)
                    },
                    () => { // on completion
                      this.loading.next(false);
                    }
                  );
  }

}
