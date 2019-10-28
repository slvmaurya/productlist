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
  public ProductTitle;
  constructor(private route: ActivatedRoute, private router: Router,private http:HttpClient) { }

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   let producttitle = params.get('producttitle');
    //   this.ProductTitle = producttitle;

    // });
    this.getProductByName('Pencil');
    
  }

  public getProductByName(productName: string): Observable<ProductList[]>{
    return this.http.get<ProductList[]>('http://localhost:8012/SimpleProductListBackEnd/getByTitle.php?Title=${productName}');
}

}
