import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular app';
  
  products: IProduct[] = [];
  
  constructor (private productService: ProductService) {

  }
  
  ngOnInit(): void {
   this.productService.getAllProducts().subscribe((prod)=> {
    this.products = prod
   } )
    throw new Error('Method not implemented.');
  }
}
