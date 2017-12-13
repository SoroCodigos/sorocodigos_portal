import { Component, OnInit } from '@angular/core';

import { New } from '../mock/New';
import { NewsMock } from '../mock/Mock_News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // providers: [NewsMock]
})
export class HomeComponent implements OnInit {
  news = NewsMock;
  constructor() { }

  ngOnInit() {
    // this.getNews();
  }

  // getNews(): Promise<New[]> {
  //   return Promise.resolve(NewsMock);
  // }

}
