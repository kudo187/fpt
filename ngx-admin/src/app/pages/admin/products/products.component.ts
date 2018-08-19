import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product/product-service.service';
import { Product } from './products';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data.result;
      console.log(this.products);
    }, error => {
      console.error(error);
    });
  }

  deleteProduct(product: Product) {
    if (confirm("Are you sure you want to delete " + product.name + "?")) {
      this.productService.deleteProduct(product.id).subscribe(
        data => {
          // refresh the list
          this.getContacts();
          return true;
        },
        error => {
          console.error("Error deleting food!");
          return Observable.throw(error);
        }
      );
    }
  }



  // createProduct(product: Product) {
  //   this._demoService.createFood(food).subscribe(
  //     data => {
  //       // refresh the list
  //       this.getFoods();
  //       return true;
  //     },
  //     error => {
  //       console.error("Error saving food!");
  //       return Observable.throw(error);
  //     }
  //   );
  // }

  // updateFood(food) {
  //   this._demoService.updateFood(food).subscribe(
  //     data => {
  //       // refresh the list
  //       this.getFoods();
  //       return true;
  //     },
  //     error => {
  //       console.error("Error saving food!");
  //       return Observable.throw(error);
  //     }
  //   );
  // }

}
