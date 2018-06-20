import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.scss']
})
export class ProductCompareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() product: any;
}
