import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'forum-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  @Input() adsUrl;

  @Input() imgUrl;

  constructor() { }

  ngOnInit() {
  }

}
