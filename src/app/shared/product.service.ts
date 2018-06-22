import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return PRODUCTS;
  }
}

const PRODUCTS = [
  {
    "id": "1",
    "name": "Chair",
    "image": "https://devitems.com/preview/furnish/img/product/1.jpg",
    "price": "$39",
    "colors": ["red", "green", "blue"],
    "condition": "New",
    "description": "Black chair",
    "compareOrRemove": "Compare"
  },
  {
    "id": "2",
    "name": "Lamp",
    "image": "https://devitems.com/preview/furnish/img/product/2.jpg",
    "price": "$319",
    "colors": ["green", "blue"],
    "condition": "Used",
    "description": "Amazing lamp",
    "compareOrRemove": "Compare"
  },
  {
    "id": "3",
    "name": "Statue",
    "image": "https://devitems.com/preview/furnish/img/product/3.jpg",
    "price": "$239",
    "colors": ["red"],
    "condition": "Used",
    "description": "Used Statue",
    "compareOrRemove": "Compare"
  },
  {
    "id": "4",
    "name": "Seat",
    "image": "https://devitems.com/preview/furnish/img/product/4.jpg",
    "price": "$239",
    "colors": ["blue"],
    "condition": "New",
    "description": "Large Seat",
    "compareOrRemove": "Compare"
  }
];