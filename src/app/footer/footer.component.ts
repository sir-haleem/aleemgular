import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forum-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host : {
    class:"row"
  }
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
