import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './ads/ads.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';

import { youTubeServiceInjectables, YoutubeService } from './youtube-search/youtube.service';
import { SearchResultsComponent } from './youtube-search/search-results/search-results.component';
import { SearchBoxComponent } from './youtube-search/search-box/search-box.component';
// import { SectionSummaryComponent } from './section-summary/section-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    AdsComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchResultsComponent,
    SearchBoxComponent,
    // SectionSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ youTubeServiceInjectables ],
  bootstrap: [AppComponent]
})
export class AppModule { }
