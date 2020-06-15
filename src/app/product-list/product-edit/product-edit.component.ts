import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  name:string;
  price: number;
  color: string;
  imgPath: string;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onAddProduct(){
    if(name==null || this.price ==null || this.color==null) return;
    this.product= new Product(this.name, this.price, this.color, this.imgPath);
    this.productService.addProduct(this.product);
  }

}
