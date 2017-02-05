import { Component } from '@angular/core';
import { LoginComponent} from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent} from './ads/ads.component';

import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';


@Component({
  selector: 'forum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  ads = {
    0: {
      imgUrl: '../assets/images/BannerCover copy.jpg',
      url: '#'
    },
    1: {
      imgUrl: '../assets/images/BannerCover copy.jpg',
      url: '#'
    }
  };

  user = {
    isSignedIn : false
  };
  constructor() {
    // $(document).ready( () => console.log($('body')));
  }

  

}
