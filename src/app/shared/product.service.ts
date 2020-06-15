import { Product } from './product.model';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ProductService{
    productChanged = new Subject<Product[]>();
    products: Product[] = [
        new Product(
          'Lux A2.0 Standard',
          990,
          'pink',
          'data:image/jpeg;base64,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'
        ),
        new Product(
          'Standard MT 2019',
          299,
          'brown',
          'data:image/jpeg;base64,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'
        ),
      ];

    getProducts(){
        return this.products.slice();
    }

    addProduct(product: Product){
        this.products.push(product);
        this.productChanged.next(this.products.slice());
    }
    addProducts(products: Product[]){
        for (const product of products) {
            this.products.push(product);
        }
        this.productChanged.next(this.products.slice())
    }
}