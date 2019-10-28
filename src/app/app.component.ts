import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductList } from './ProductList';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: ProductList[];
  error = '';
  success = '';
        
  constructor(private productService: ProductService,private http:HttpClient,private router:Router) {
  }
        
  ngOnInit() {
    this.getProducts();
  }
        
  getProducts(): void {
    this.productService.getAll().subscribe(
      (res: ProductList[]) => {
        this.products = res;
        console.log(this.products);
      },
      (err) => {
        this.error = err;
      }
    );

  }

  selectProduct(products){
      this.router.navigate(['./DisplayProduct',products.Title]);
  }


}