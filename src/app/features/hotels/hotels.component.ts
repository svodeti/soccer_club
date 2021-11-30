import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookHotel(){
    window.open("https://www.hotels.com/search.do?destination-id=1468893&q-check-in=2021-11-19&q-check-out=2021-11-22&q-rooms=1&q-room-0-adults=2&q-room-0-children=0&sort-order=BEST_SELLER", "_blank");
  }
}
