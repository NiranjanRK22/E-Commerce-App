import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private api: ProductApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      console.log(res);
      this.productList = res 
    }
      );
  }

}
