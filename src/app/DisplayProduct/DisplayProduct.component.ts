import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap }   from '@angular/router';
import { ProductService} from '../product.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductList } from '../ProductList';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayProductComponent {
    products: ProductList[];
    error = '';
  constructor(private productService: ProductService,private route: ActivatedRoute, private router: Router,private http:HttpClient) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('Title');
    console.log(id);
    this.getProduct(id);
    
  }




  getProduct(productName: string): void {
    this.productService.getProductByName(productName).subscribe(
      (res: ProductList[]) => {
        this.products = res;
        console.log(this.products);
      },
      (err) => {
        this.error = err;
      }
    );

  }

}
