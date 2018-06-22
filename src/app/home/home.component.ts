import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: any = [];

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  productsToCompare: any = [];
  compareOrRemove: string = "Compare";
  enoughProductsToCompare: boolean = false;

  compare(inputProduct) {
    inputProduct.compareOrRemove = inputProduct.compareOrRemove === "Compare" ? "Remove" : "Compare";
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
