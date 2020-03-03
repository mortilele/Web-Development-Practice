import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  share(product) {
    const url: string = window.location.href + '/' + product.id;
    window.alert(`The product ${ product.name } has been shared!`);
    window.open(`https://telegram.me/share/url?url=${ url }&text=${ product.name }`);
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // tslint:disable-next-line:no-shadowed-variable
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  add(name: string): void {
    name = name.trim();
    const description = 'New descirption';
    const price = 600.0;
    const image = 'https://ae01.alicdn.com/kf/H3d53910ec693473d86f17f86a8dad903O/LHMZNIY-Laptop-15-6-inch-Windows10-Notebook-16GB-DDR4-RAM-1T-SSD-HD-screen-intel-1.jpg_220x220xz.jpg_.webp';
    const rating = 0.0;
    // tslint:disable-next-line:variable-name
    const category_id = 1;
    if (!name) { return; }
    this.productService.addHero({ name, description, price, image, rating, category_id })
      .subscribe(product => {
        this.products.push(product);
      });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
