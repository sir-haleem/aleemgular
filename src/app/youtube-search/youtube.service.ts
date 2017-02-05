import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SearchResult} from './search-result';

export let YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export let YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

export let youTubeServiceInjectables: Array<any> = [
  {
    provide: YoutubeService,
    useClass: YoutubeService
  },
  {
    provide: YOUTUBE_API_KEY,
    useValue: YOUTUBE_API_KEY
  },
  {
    provide: YOUTUBE_API_URL,
    useValue: YOUTUBE_API_URL
  }
];

@Injectable()
export class YoutubeService {
  constructor(private _http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl: string = `${this.apiUrl}?${params}`;

    return this._http.get(queryUrl)
            .map( (response: Response) => {
              return (<any>response.json()).items.map(item => {
                console.log('Raw Item:' + item);
                return new SearchResult({
                  id: item.id.videoId,
                  title: item.snippet.title,
                  description: item.snippet.description,
                  thumbnailUrl: item.snippet.thumbnails.high.url
                });
              });
            });
  }

}
