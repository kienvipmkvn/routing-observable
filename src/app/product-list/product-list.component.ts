import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  productSubcription: Subscription;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productSubcription = this.productService.productChanged.subscribe(products=>{
      this.products = products;
    })
  }
  ngOnDestroy(){
    this.productSubcription.unsubscribe();
  }

  onAddProduct(product: Product){
    this.productService.addProduct(product);
  }
}
