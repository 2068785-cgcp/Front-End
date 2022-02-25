import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router,private userApi:UserApiService) { }

  ngOnInit(): void {
  }

  logout(){
    // remove token
    localStorage.removeItem('token')
    // make behaviour subect into null
    this.userApi.user.next(null)
    // route to login page
    this.route.navigateByUrl('login')
  }
}
