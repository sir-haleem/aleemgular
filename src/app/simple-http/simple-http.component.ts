import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'forum-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.scss']
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) {  }

  makeRequest(): void {
    this.data = null;
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
