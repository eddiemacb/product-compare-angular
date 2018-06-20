import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = [
    {
      "price": "$39",
      "name": "Chair",
      "description": "Black chair",
      "image": "https://devitems.com/preview/furnish/img/product/1.jpg",
      "condition": "Used"
    },
    {
      "price": "$319",
      "name": "Lamp",
      "description": "Amazing lamp",
      "image": "https://devitems.com/preview/furnish/img/product/2.jpg",
      "condition": "New"
    },
    {
      "price": "$239",
      "name": "Statue",
      "description": "Used statue",
      "image": "https://devitems.com/preview/furnish/img/product/3.jpg",
      "condition": "New"
    },
    {
      "price": "$199",
      "name": "Seat",
      "description": "Large seat",
      "image": "https://devitems.com/preview/furnish/img/product/4.jpg",
      "condition": "Used"
    }
  ]

  addToCompare() {
    window.location.href = "https://bmo.com"
  }
}
