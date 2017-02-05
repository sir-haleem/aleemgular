import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'forum-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    class: "navbar navbar-fixed-top navbar-default"
  }
})
export class NavbarComponent implements OnInit {
  
  @Input() isSignedIn = false;
  constructor() { }

  onClick() {
    this.isSignedIn = !this.isSignedIn;

    console.log(this.isSignedIn);
  }

  ngOnInit() {
  }

}
