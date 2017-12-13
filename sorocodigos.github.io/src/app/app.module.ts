import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './navMenu/navMenu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewsMock } from '../app/mock/Mock_News';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'app-home', pathMatch: 'full' },
      { path: 'app-home', component: HomeComponent },
      { path: 'app-about', component: AboutComponent },
      // { path: 'fetch-data', component: FetchDataComponent },
      // { path: 'podcast-list', component: PodcastListComponent },
      { path: '**', redirectTo: 'app-root' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
