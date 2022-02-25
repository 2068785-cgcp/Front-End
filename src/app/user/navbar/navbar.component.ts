import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { UserProductApiService } from '../user-product-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router,public userApi:UserApiService,public prodApi:UserProductApiService) { }

  ngOnInit(): void {
    this.prodApi.cartCount.next(this.userApi.user.getValue().cart.length)
    // console.log(this.prodApi.cartCount.getValue());
    
  }

  // logout Operation
  logout(){
    this.userApi.logoutUser()
    // route to login page
    this.route.navigateByUrl('login')
  }
}
