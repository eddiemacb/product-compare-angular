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
    "image": "http://localhost:4200/assets/img/chair.jpeg",
    "price": "$39",
    "colors": ["red", "green", "blue"],
    "condition": "New",
    "description": "Black chair",
    "compareOrRemove": "Compare"
  },
  {
    "id": "2",
    "name": "Lamp",
    "image": "http://localhost:4200/assets/img/lamp.jpeg",
    "price": "$319",
    "colors": ["green", "blue"],
    "condition": "Used",
    "description": "Amazing lamp",
    "compareOrRemove": "Compare"
  },
  {
    "id": "3",
    "name": "Statue",
    "image": "http://localhost:4200/assets/img/statue.jpeg",
    "price": "$239",
    "colors": ["red"],
    "condition": "Used",
    "description": "Used Statue",
    "compareOrRemove": "Compare"
  },
  {
    "id": "4",
    "name": "Seat",
    "image": "http://localhost:4200/assets/img/seat.jpeg",
    "price": "$239",
    "colors": ["blue"],
    "condition": "New",
    "description": "Large Seat",
    "compareOrRemove": "Compare"
  }
];
