import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { subscribeOn } from 'rxjs/operator/subscribeOn';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
 albumInfo:
 
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response =>
      this.albumInfo = response);
  }

}
