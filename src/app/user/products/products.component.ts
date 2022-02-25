import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserProductApiService } from '../user-product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private userApi: UserApiService, private prodApi: UserProductApiService) { }

  products: any[] = [
    {
      name: 'One',
      price: 1000
    },
    {
      name: 'Two',
      price: 5000
    },
    {
      name: 'Three',
      price: 4000
    },
    {
      name: 'Four',
      price: 4000
    },
    {
      name: 'Five',
      price: 8000
    },
    {
      name: 'Six',
      price: 12000
    }
  ]
  ngOnInit(): void {
  }
  addToCart(item) {
    let cartObj = {
      email: this.userApi.user.getValue().email,
      product: item
    }
    // updateCart
    this.prodApi.addProductToCart(cartObj).subscribe({
      next: (res) => {
        if (res.message == 'Cart updated successfully!') {
          // update cart count
        }
      },
      error: (err) => { console.log(err) }
    })
  }

}
