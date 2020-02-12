import { Component } from '@angular/core';

import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products = products;

  share(product) {
    const url: string = window.location.href;
    window.alert(`The product ${ product.name } has been shared!`);
    window.open(`https://telegram.me/share/url?url=${ url }&text=${ product.name }`);

  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
