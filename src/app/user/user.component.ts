import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from './user-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route:Router,private userApi:UserApiService) { }

  ngOnInit(): void {
  }

 
}
