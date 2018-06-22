import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

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
      "id": "1",
      "name": "Chair",
      "image": "https://devitems.com/preview/furnish/img/product/1.jpg",
      "price": "$39",
      "colors": ["red", "green", "blue"],
      "condition": "New",
      "description": "Black chair",
      "compareOrRemove" : "Compare"
    },
    {
      "id": "2",
      "name": "Lamp",
      "image": "https://devitems.com/preview/furnish/img/product/2.jpg",
      "price": "$319",
      "colors": ["green", "blue"],
      "condition": "Used",
      "description": "Amazing lamp",
      "compareOrRemove" : "Compare"
    },
    {
      "id": "3",
      "name": "Statue",
      "image": "https://devitems.com/preview/furnish/img/product/3.jpg",
      "price": "$239",
      "colors": ["red"],
      "condition": "Used",
      "description": "Used Statue",
      "compareOrRemove" : "Compare"
    },
    {
      "id": "4",
      "name": "Seat",
      "image": "https://devitems.com/preview/furnish/img/product/4.jpg",
      "price": "$239",
      "colors": ["blue"],
      "condition": "New",
      "description": "Large Seat",
      "compareOrRemove" : "Compare"
    }
  ]

  productsToCompare: any = [];
  compareOrRemove: string = "Compare";
  enoughProductsToCompare: boolean = false;

  compare(inputProduct) {
    inputProduct.compareOrRemove = inputProduct.compareOrRemove === "Compare" ? "Remove" : "Compare";
    console.log(inputProduct.compareOrRemove);
    if (this.checkProduct(inputProduct, this.productsToCompare)) {
      this.productsToCompare = this.removeProduct(this.productsToCompare, inputProduct);
      if (this.productsToCompare.length < 2) {
        this.enoughProductsToCompare = false;
        this.productsToCompare.map(product => product.compareOrRemove = "Compare");
        this.productsToCompare = [];
      }
    } else {
      this.addProduct(this.productsToCompare, inputProduct);
      if (this.productsToCompare.length >= 2) {
        this.enoughProductsToCompare = true;
      }
    }
  }

  // check if product is in product compare array
  checkProduct(product, products) {
    for (let i = 0; i < products.length; i++) {
      // product id match
      if (products[i].id === product.id) {
        return true;
      }
    }
  }

  // To delete product from product compare array
  removeProduct(products, product) {
    products = products.filter(item => JSON.stringify(item) !== JSON.stringify(product))
    console.log(products);
    return products;
  }

  // To add product to product compare array
  addProduct(products, product) {
    return products.push(product);
  }
}
