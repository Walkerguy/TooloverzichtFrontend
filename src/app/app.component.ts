import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})

export class AppComponent {
  title = 'toolFrontend';

  // Define a products property to hold our prod data
  products: Array<Product>;
  productje:Product;
  // Create an instance of the DataService through dependency injection
  constructor(private _productService: ProductService) {

   // Access the Data Service's getproducts() method we defined
   this._productService.getProducts()
       .subscribe(res => this.products = res);
  }

  photoclicked(a:any){
    this.productje = a;
  }
}